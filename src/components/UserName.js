import React from "react";
import {useRecoilValue} from "recoil";
import {currentUserName} from "../recoil/name";

function UserName() {
    const userName = useRecoilValue(currentUserName);
    return <div>{userName}</div>;
}

export default UserName;
