import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {

    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Today at 4:45PM" commentBody="Great post, man" imageSrc={faker.image.avatar()}/>
            <CommentDetail author="Alex" timeAgo="Today at 2:00AM" commentBody="I see what you did there." imageSrc={faker.image.avatar()}/>
            <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" commentBody="I'm not sure this is how you're supposed to do it." imageSrc={faker.image.avatar()}/>
        </div>
    );
};


ReactDOM.render(
    <App/>, document.querySelector('#root')
);