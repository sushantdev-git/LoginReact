import React ,{useState, useEffect} from "react";
import styles from './HomePage.module.css';

import {db, auth, logout} from '../../firebase';
import {addDoc, collection, query, onSnapshot, updateDoc, doc} from 'firebase/firestore';

function HomePage(){

    const [username, setUsername] = useState("");
    const [image, setImage] = useState(null);
    const [base64S, setBase64S] = useState(null);
    const [fetchedImage, setFetchedImage] = useState(null);
    const [fetchedUsername, setFetchedUsername] = useState("New user");
    const [docId, setDocId] = useState(null);


    const getBase64 = file => {
        return new Promise(resolve => {
          let baseURL = "";
          // Make new FileReader
          let reader = new FileReader();
    
          // Convert the file to base64 text
          reader.readAsDataURL(file);
    
          // on reader load somthing...
          reader.onload = () => {
            // Make a fileInfo Object
            console.log("Called", reader);
            baseURL = reader.result;
            console.log(baseURL);
            resolve(baseURL);
          };
        });
    };


    const handleFileInputChange = file => {

        console.log(file)
        console.log("file changeddd...")
    
        getBase64(file)
          .then(result => {
            file["base64"] = result;
            console.log("File Is", file);
            setBase64S(result)
        })
        .catch(err => {
            console.log(err);
        });

        setImage(file)
    
    };

    useEffect(() => {
        let user = auth.currentUser;

        const q = query(collection(db, "app/users/"+user.uid))
        
        onSnapshot(q, (querySnapshot) => {
            const data  = querySnapshot.docs[0].data();
            
            setFetchedUsername(data.username);
            setFetchedImage(data.image)
            setDocId(querySnapshot.docs[0].id)
        })
    },[])

    const uplodaData = async () => {
        const uid = auth.currentUser.uid;

        if(username.length < 3){
            alert("Please enter a valid name");
            return;
        }

        try {
            let user = auth.currentUser;

            if(!docId){
                await addDoc(collection(db, "app/users/"+user.uid), {
                    uid: user.uid,
                    email: user.email,
                    username:username, 
                    image: base64S,
                });
            }
            else{

                let refdoc = doc(db, "app/users/"+user.uid, docId)
                
                await updateDoc(refdoc, {
                    uid: user.uid,
                    email: user.email,
                    username:username, 
                    image: base64S ? base64S : fetchedImage,
                });
            }
        
        } catch (err) {
            alert(err)
        }
    }



    return (
        <div className={styles.HomePage}>
            <div className={styles.DashBoard}>
                <h1>User Details</h1>
                <div className={styles.UserDetials}>
                    <h3>{fetchedUsername}</h3>
                    <img src ={ fetchedImage ? fetchedImage : "https://fusiontc.com/wp-content/themes/consultix/images/no-image-found-360x260.png"}/>

                    <button onClick={logout}>LogOut</button>
                </div>

                <div className={styles.line}></div>
                <h1>Update User Details</h1>
                <div className={styles.UserDetials}>
                    <h3>Enter User Name</h3>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>

                    <h3>Choose Image</h3>
                    <input type="file" onChange= {(e) => handleFileInputChange(e.target.files[0])}></input>
                    <img src={image ? URL.createObjectURL(image) : ""}/>
                    <button onClick={uplodaData}>Submit</button>
                </div>
                
            </div>
        </div>
    )
}

export default HomePage;