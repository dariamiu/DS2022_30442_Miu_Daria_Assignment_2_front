import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"

const AdminInitialView = () => {

    const navigate = useNavigate()
    const {state} = useLocation()
    const admin = state.admin

    console.log(admin)

    const onClickAddClient = async(e) => {
        e.preventDefault()
        navigate('/admin/add-client',{})
    }

    const onClickAddDevice = async(e) => {
        e.preventDefault()
        navigate('/admin/add-device',{})
       
    }
    const onLogOutSubmit = (e) => {
        e.preventDefault()
        navigate('/', {
        })
    }

    const onClickManageDevices = async(e) => {
        e.preventDefault()
        navigate('/admin/manage-devices',{})
    }

    const onClickManageClients = async(e) => {
        e.preventDefault()
        navigate('/admin/manage-clients',{})
    }

    return(
        <div>
            <div className = "row">
                <div className = "greenTitle"style={{marginLeft : 50, fontSize : 50}}>Energy Utility Platform</div>
                <button className = "btn" style = {{marginLeft : 1000}} type="submit" id='btn-log-out' onClick={(e) => onLogOutSubmit(e)}>
                    Log out
                </button>
            </div>
            <hr></hr>
            <div className='containerWithBorder centerContainer'>
                    <button  onClick={(e) => onClickAddClient(e)} 
                    class="btn btn-primary btn-block firstButton" type="submit">
                        Add Client</button>
                    <button onClick={(e) => onClickAddDevice(e)} 
                    class="btn btn-primary btn-block" type="submit">
                        Add Device</button>
                    <button onClick={(e) => onClickManageClients(e)} 
                    class="btn btn-primary btn-block" type="submit">
                        Manage Clients</button>
                    <button onClick={(e) => onClickManageDevices(e)} 
                    class="btn btn-primary btn-block" type="submit">
                        Manage Devices</button>
            </div>
        </div>
    
        )
}

export default AdminInitialView