// import React from "react";
// import TweetListItem from "./TweetListItem";
// import {useSelector} from "react-redux";
//
// const selectAllTweets = (state) => state.tweets;
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TweetListItem from "./TweetListItem";
import {fetchAllTweets} from "../../../../services/twitterService";

const selectAllTweets = (state) => state.tweets;

const TweetList = () => {
    const tweets = useSelector(selectAllTweets);
    const dispatch = useDispatch();
    useEffect(() => fetchAllTweets(dispatch), [])
    return(
        <ul className="list-group">
            {
                tweets.map(tweet => <TweetListItem tweet={tweet}/>
                )
            }
        </ul>
    )
};
export default TweetList;
