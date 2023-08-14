import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CreateUpdateForm = () => {
    let [formValue, setFormValue] = useState({Img:"",ProductCode:"", ProductName:"",Qty:"", TotalPrice:"", UnitPrice:""})
    let navigate = useNavigate();
    let {id} = useParams();


    useEffect(()=>{
        (async ()=>{
           let res = await axios.get("https://crud.teamrabbil.com/api/v1/ReadProductByID/"+id)
           setFormValue(res.data['data'][0])
        })()


    },[])


    const inputOnchageHandler = (property, value)=>{
        setFormValue({...formValue, [property]:value})
    }

    
    const onSubmit = async () => {
        let URL="https://crud.teamrabbil.com/api/v1/CreateProduct";
        if(id){
            URL="https://crud.teamrabbil.com/api/v1/UpdateProduct/"+id;
        }
        let res = await axios.post(URL, formValue)
        if(res.status===200){
            alert("save success");
            navigate('/')
        }
        }


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <label>Product Name</label>
                        <input className="form-control form-control-sm" value={formValue.ProductName} onChange={(e)=>{inputOnchageHandler('ProductName', e.target.value)}} type="text" placeholder='' />
                    </div>
                    <div className="col-lg-6">
                    <label>Product Code</label>
                        <input  className="form-control form-control-sm" value={formValue.ProductCode} onChange={(e)=>{inputOnchageHandler('ProductCode', e.target.value)}} type="text" placeholder='' />
                    </div>
                    <div className="col-lg-6">
                        <label>Image</label>
                        <input className="form-control form-control-sm" value={formValue.Img} onChange={(e)=>{inputOnchageHandler('Img', e.target.value)}} type="text" placeholder='' />    
                    </div>
                    <div className="col-lg-6">
                        <label>Unit Price</label>
                        <input className="form-control form-control-sm" value={formValue.UnitPrice} onChange={(e)=>{inputOnchageHandler('UnitPrice', e.target.value)}} type="text" placeholder='' />    
                    </div>
                    <div className="col-lg-6">
                        <label> Qty</label>
                        <input className="form-control form-control-sm" value={formValue.Qty} onChange={(e)=>{inputOnchageHandler('Qty', e.target.value)}} type="text" placeholder='' />    
                    </div>
                    <div className="col-lg-6">
                        <label> Total Price</label>
                        <input className="form-control form-control-sm" value={formValue.TotalPrice} onChange={(e)=>{inputOnchageHandler('TotalPrice', e.target.value)}} type="text" placeholder='' />    
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                    <button onClick={onSubmit} className="btn my-2  w-100 btn-danger">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateUpdateForm;