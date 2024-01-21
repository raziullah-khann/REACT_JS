//To check user is online or not
import { useState, useEffect } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    //check online status
    useEffect(() => { 
        addEventListener("online", () => {
              setOnlineStatus(true);
        });

        addEventListener("offline", () => {
            setOnlineStatus(false);
      })
    }, []);

    //return boolean 
    return onlineStatus;
}

export default useOnlineStatus;