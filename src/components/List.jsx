import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const List = () => {

    const [data, setData] = useState([]);
    const [id, setId] = useState(0)

    useEffect(()=>{
        (async ()=>{
            const res = await axios.get("https://crud.teamrabbil.com/api/v1/ReadProduct")
            setData(res.data['data'])
        })()

    },[id])

    const onDelete = async (id)=>{
        let url = "https://crud.teamrabbil.com/api/v1/DeleteProduct/"+id;
        await axios.get(url);
        setId(id)
    }


    return (
        <div>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <table>
                            <thead>
                                <tr>
                                    <th>Img</th>
                                    <th>ProductCode</th>
                                    <th>ProductName</th>
                                    <th>Qty</th>
                                    <th>TotalPrice</th>
                                    <th>UnitPrice</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item, index)=>{
                                        return(
                                            <tr key={index}>
                                                <td><img className="w-25" src={item["Img"]}/></td>
                                                <td>{item["ProductCode"]}</td>
                                                <td>{item["ProductName"]}</td>
                                                <td>{item["Qty"]}</td>
                                                <td>{item["TotalPrice"]}</td>
                                                <td>{item["UnitPrice"]}</td>
                                                 <td><Link to={"/update/"+item['_id']} className="btn btn-success btn-sm">Edit</Link></td>
                                                <td><button onClick={()=>{onDelete(item["_id"])}} className="btn btn-danger btn-sm">delete</button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;