import React, {useEffect} from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchWho} from "../../services/whoService";

const selectAllWho = (state) => state.who;

const WhoToFollowList = () => {
    const who = useSelector(selectAllWho);
    console.log("WhoToFollowList");
    const dispatch = useDispatch();
    useEffect(() => fetchWho(dispatch), []);
    return(
        <>
            <ul className="list-group">
                <li className="list-group-item fw-bold">Who to follow</li>
                {who.map(who1 => {
                    return(
                        <WhoToFollowListItem who = {who1}/>
                    );
                })
            }
            </ul>
        </>
    );
};

export default WhoToFollowList;

