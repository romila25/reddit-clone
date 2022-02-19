import React, { Fragment } from 'react';
import "./TrendingItem.css";

interface TrendingProps {
    title: string;
    description: string;
    subreddit: string
}
export default function TrendingItem(props: any) {
    const { render } = props;
    return <Fragment>
        {render()}
    </Fragment>;
}
