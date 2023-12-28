import axios from "axios"
import { useEffect, useState } from "react"
import Note from "../components/Note"
import dayjs from "dayjs"
 

const UserPage = () => {
    const [banner, setBanner] = useState([])
    useEffect(() => {
        const date = new Date()
        axios.get("http://localhost:8080/api/notes/").then((response) => {
            const ar = response.data.filter(item => dayjs(item.date).isAfter(date))
            if (ar.length > 1) {
                const min = Math.ceil(0);
                const max = Math.floor(ar.length);
                // console.log(Math.floor(Math.random() * (max - min) + min))
                setBanner([ar[Math.floor(Math.random() * (max - min) + min)]])

            }
            else{
                setBanner(ar)
            }
        })
    },[])

    useEffect(()=> {
        if (banner.length) {
            axios.put(`http://localhost:8080/api/note/${banner[0].id}`,{count:banner[0].count + 1})
        }
    },[banner])
    return(
        <div className="w878 pt32 pl32">
        <h2 className="h2 mb31">Новости</h2>
            <ul>
                {banner.map((item) => (
                    <Note
                        key={item.id} 
                        item={item} 
                        // handleDelete={handleDelete} 
                        // handleSave={handleSave}
                    />
                ))}
            </ul>
        </div>
    )
}
export default UserPage