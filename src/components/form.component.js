import React, {  useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Form = (props) => {
    const navigate = useNavigate();
    /* LIST EMPLOYEES */
    const [contactList, setContactList] = useState([]);
    const [mainContactList, setMainContactList] = useState([]);
    // const [querySearch, setQuerySearch] = useState({});
    const [searchParameter, setSearchParameter] = useState({contactName:"", contactNumber:"", contactEmail:""});
    
    let accessToken = JSON.parse(localStorage.getItem("user")).accessToken;
    let showPage = accessToken?true:false;

    const URL = "http://localhost:5001/api/contactforms/";
    

    
    // useEffect(+++

    //         // const data= [{ Name:'Jitesh Kumar', Number:'12345677', Email:"jitesh@gmail.com", Company:'webhub', Services:"seo", Requirement:"optim", Other:"none"},
    //         //             { Name:'new', Number:'12345677', Email:"jitesh@gmail.com", Company:'webhub', Services:"seo", Requirement:"optim", Other:"none"}
    //         //         ];
    //         // setContactList(data);
                
    //     },
    //     [confirmUpdate]
    // );

    // Logout Admin
    const logoutAdmin = () =>{
        localStorage.clear();
        navigate("/AdminLogin")
    }

   
    // Get DATA 
    const searchItems = async () => {
        try{
            
            let config = {
                headers: {
                    "x-access-token": accessToken
                }
            }
            const {data} = await axios.get(URL, config);

            data.map((item)=> item.isEditing=false);
            data.map((item)=> item.isDeleting=false);
            data.map((item)=> item.createdAt= new Date(item.createdAt)); 
            // (new Date(item.createdAt)).toString().split("GMT")[0]
            data.sort((a, b) => b.createdAt - a.createdAt);
            setMainContactList(data);
            setContactList(data);
        } catch (error){
            alert("Not Accessible!!");
        }
    }

    // Search Data
    
    // let [searchContactList, setSearchContactList] = useState([...contactList])
    const handleSearchInput = (event) => {
        // var searchContactList = [...contactList];
        var {name, value} = event.target;
        setSearchParameter({...searchParameter, [name]:value});
        if(searchParameter.contactName ==="" && searchParameter.contactNumber==="" && searchParameter.contactEmail==="")
        {
            setContactList(mainContactList);
        } 
        else{
            const searchContactList = [...mainContactList].filter((ele)=> (ele[name].includes(searchParameter[name])));
            setContactList(searchContactList);
        }  
    }


    /* UPDATE */
    const handleContactInputeChange = (contact, prInput) => {
        let contactsNewReference = [...contactList]; //Create copy of contactList
        const index = contactsNewReference.findIndex((item) => item.id === contact.id);
        const { name, value } = prInput.target;
        contactsNewReference[index] = { ...contact, [name]: value };
        setContactList(contactsNewReference);
    }
    const updateEditingStatus = (contact, prFlag) => {
        let contactsNewReference = [...contactList]; //Create copy of contactList
        const index = contactsNewReference.findIndex((item) => item.id === contact.id);
        contactsNewReference[index].isEditing = prFlag;
        setContactList(contactsNewReference);
        if(prFlag===false){
            searchItems();
        }
    }
    const confirmUpdate = (contact) => {
        let config = {
            headers: {
                "x-access-token": accessToken
            }
        }
        axios.put(URL+contact.id, contact, config).then(response => {
            
            let contactsNewReference = [...contactList]; //Create copy of contactList
            const index = contactsNewReference.findIndex((item) => item.id === contact.id);
            contactsNewReference[index] = response.data;
            contactsNewReference[index].isEditing = false;
            setContactList(contactsNewReference);
            searchItems();
            alert(response.data.message);
        });
        
    
    }

    /* Search Click */
    // const [contactToSearch, setContactToSearch] = useState(contactList);
   
    const confirmSearchContact = () => {
        
        setSearchParameter({...searchParameter});
        if(searchParameter.contactName ==="" && searchParameter.contactNumber==="" && searchParameter.contactEmail==="")
        {
            setContactList(mainContactList);
        } 
        else{
            const searchContactList = [...mainContactList].filter((ele)=> (ele.contactName.includes(searchParameter.contactName))).filter((ele)=> (ele.contactNumber.includes(searchParameter.contactNumber))).filter((ele)=> (ele.contactEmail.includes(searchParameter.contactEmail)));
            setContactList(searchContactList);
        }  
    }

    /* DELETE */
    const updateDeletingStatus= (contact, prFlag) => {
        let contactsNewReference = [...contactList]; //Create copy of contactList
        const index = contactsNewReference.findIndex((item) => item.id === contact.id);
        contactsNewReference[index].isDeleting = prFlag;
        setContactList(contactsNewReference);
    }
    const deleteContact = (contact) => {
        
        axios.delete(URL+contact.id).then(response => {
            alert(response.data.message);
            let contactsNewReference = [...contactList];
            const index = contactsNewReference.findIndex((item) => item.id === contact.id);
            contactsNewReference.splice(index, 1);
            setContactList(contactsNewReference);
        });
    }


    return (

        <div style={{marginTop:"10vh"}}>
            {showPage?
            <div style={{display:"block"}}>
                {/* <hr />
                <h2 style={{marginTop:"10vh"}}>Contacts</h2>
                <br /> */}
                <div className="row" >
                    {/* Search Contact */}
                    <div className="col-md-2">
                        <div className="card border border-secondary shadow-0">
                            <div className="card-header bg-secondary text-white">Admin<span className="glyphicon glyphicon-search"></span></div>
                            <div className="card-body">
                                <div className="row">
                                    {/* <div className="col-md-7">
                                        <label className="form-label">Contact</label>
                                        <input className="form-control" placeholder="Enter" name="name" type="text" value={searchParameterName} onChange={handleInputChange} />
                                    </div> */}
                                    <div className="col-md-10" style={{"display":"flex", "flex-Direction":"row"}}>
                                        <label className="form-label">&nbsp;</label>
                                        <div className="btn-toolbar">
                                            <button type="button" className="btn btn-primary form-control" style={{backgroundColor:"red",fontWeight:"bold", marginRight:"10px"}} onClick={logoutAdmin.bind(this)}>logout</button>
                                        </div>
                                        <label className="form-label">&nbsp;</label>
                                        <div className="btn-toolbar">
                                            <button type="button" className="btn btn-primary form-control" onClick={searchItems.bind(this)}>Get Data</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* New Contact */}
                    <div className="col-md-8">
                        <div className="card border border-secondary shadow-0">
                            <div className="card-header bg-secondary text-white"><b>Search</b> Contact</div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label className="form-label">Name</label>
                                        <input className="form-control" placeholder="Enter Name" name="contactName"  onChange={handleSearchInput.bind(this)} type="text" />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">Contact Number</label>
                                        <input className="form-control" placeholder="Enter Number" name="contactNumber"  onChange={handleSearchInput.bind(this)} type="text" />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label">Email Address</label>
                                        <input className="form-control" placeholder="Enter Email Address" name="contactEmail"  onChange={handleSearchInput.bind(this)} type="text" />
                                    </div>
                                    <div className="col-md-2">
                                        <label className="form-label">&nbsp;</label>
                                        <button type="button" className="btn btn-success form-control" onClick={confirmSearchContact.bind(this)} >Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                {/* Display Contact */}
                <div className="card border border-secondary shadow-0" style={{"max-height":"60vh"}}>
                    <div className="card-header bg-secondary text-white"><b>Display</b> Contacts</div>
                
                    <div className="card-body" style={{"overflow-y":'scroll'}} >
                        <table className="table table-striped" >
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Name</th>
                                    <th>Number</th>
                                    <th>Email</th>
                                    <th>Company</th>
                                    <th>Services</th>
                                    <th>Requirement</th>
                                    <th>Options</th>
                                    <th>Any Remark</th>
                                    
                                </tr>
                            </thead>
                            
                            <br/>
                            <tbody style={{ overflow:'show', "max-height":"60vh"}}>
                                {contactList.map(item =>
                                    <tr key={1000-item.id}>
                                        <td style={{width:"10vw"}}><input className="form-control" value={item.createdAt.getDate()+"/"+item.createdAt.getMonth()+"/"+item.createdAt.getFullYear()+" "+item.createdAt.getHours()+":"+item.createdAt.getMinutes()+":"+item.createdAt.getSeconds()} name="id" disabled /></td>
                                        <td style={{width:"10vw"}}><input className="form-control" value={item.contactName} onChange={handleContactInputeChange.bind(this, item)} name="contactName" disabled={!item.isEditing} /></td>
                                        <td style={{width:"10vw"}}><input className="form-control" value={item.contactNumber} onChange={handleContactInputeChange.bind(this, item)} name="contactNumber" disabled={!item.isEditing} /></td>
                                        <td style={{width:"10vw"}}><input className="form-control" value={item.contactEmail} onChange={handleContactInputeChange.bind(this, item)} name="contactEmail" disabled={!item.isEditing} /></td>
                                        <td style={{width:"10vw"}}><input className="form-control" value={item.companyName} onChange={handleContactInputeChange.bind(this, item)} name="companyName" disabled={!item.isEditing} /></td>
                                        <td><input className="form-control" value={item.services} onChange={handleContactInputeChange.bind(this, item)} name="services" disabled={!item.isEditing} /></td>
                                        <td style={{width:"10vw"}}><input className="form-control" value={item.requirements} onChange={handleContactInputeChange.bind(this, item)} name="requirements" disabled={!item.isEditing} /></td>
                                        
                                        <td style={{width:"10vw"}}>
                                            <div className="btn-toolbar" style={{"justify-content":"space-around"}}>
                                                <button type="button" className="btn btn-info mr-2" onClick={updateEditingStatus.bind(this, item, true)} style={{ display: item.isEditing ? 'none' : 'block' }}><i class="fa fa-edit"></i></button>
                                                <button type="button" className="btn btn-warning mr-2" onClick={updateEditingStatus.bind(this, item, false)} style={{ display: item.isEditing ? 'block' : 'none' }}><i class="fa fa-solid fa-ban"></i></button>
                                                <button type="button" className="btn btn-success mr-2" onClick={confirmUpdate.bind(this, item)} style={{ display: item.isEditing ? 'block' : 'none' }}><i class="fa fa-light  fa-check"></i></button>
                                                <button type="button" className="btn btn-warning mr-2" onClick={updateDeletingStatus.bind(this, item, false)} style={{ display: item.isDeleting ? 'block' : 'none' }}><i class="fa fa-solid fa-ban"></i></button>
                                                <button type="button" className="btn btn-danger mr-2" onClick={deleteContact.bind(this, item)} style={{ display: item.isDeleting ? 'block' : 'none' }}><i class="fa fa-light  fa-check"></i></button>
                                                <button type="button" className="btn btn-danger mr-2" onClick={updateDeletingStatus.bind(this, item, true)} style={{ display: item.isDeleting ? 'none' : 'block' }}><i class="fa fa-solid fa-trash"></i></button>
                                            </div>
                                        </td>
                                        <td style={{width:"5vw"}}><input className="form-control" value={item.otherInfo} onChange={handleContactInputeChange.bind(this, item)} name="otherInfo" disabled={!item.isEditing} /></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            :<div style={{ margin:"auto","margin-top":"10vh"}}><h1>Page Not Found 404!</h1></div>}
        </div>
    )
}

export default Form;