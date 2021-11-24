import React from 'react'
import Searchbar from '../../components/searchbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { Link } from 'react-router-dom';
import UserDiscussionTextarea from '../../components/userdiscussiontextarea';
import UserDiscussionButton from '../../components/userdiscussionbutton';
import UserDiscussionStructure from '../../components/userdiscussionstructure';
import UserDiscussionComments from '../../components/userdiscussioncomments';

export default function UserDiscussion1() {
  return (
    <div>
      <Navbar />
      <Searchbar />

      <UserDiscussionStructure heading='What is 404 not found error'>

        <div className="py-2 pt-4">
          <h5 className="py-3 px-5">
            I have created a small web site, where I am showing some data, which I get from an API (JSON data type ).In my console I am getting these two errors:
          </h5>

          <div class=" py-3 px-5">
            <UserDiscussionTextarea placeholder='Example: Add your comment here !' />

            <UserDiscussionButton text='POST' href='' />
          </div>

          <h4 className="px-5 pt-4">ANSWERS: </h4>
        </div>

        <UserDiscussionComments commentor='Haris Ahmed' comment={` ajax is asynchronous request means that you cant return it when it is in progress so if you want return any thing from ajax you must call it's events like success and error.so your code must like below:  `} date='asnwered at  5-feb-2020 12.30 pm' teacher='yes' />

        <UserDiscussionComments commentor='Haris Ahmed' comment={` ajax is asynchronous request means that you cant return it when it is in progress so if you want return any thing from ajax you must call it's events like success and error.so your code must like below:  `} date='asnwered at  5-feb-2020 12.30 pm' />

        <UserDiscussionComments commentor='Mudasser Ahmed' comment={` ajax is asynchronous request means that you cant return it when it is in progress so if you want return any thing from ajax you must call it's events like success and error.so your code must like below:  `} date='asnwered at  3-jan-2021 12.30 pm' />

        <UserDiscussionComments commentor='Junaid Tareen' comment={` ajax is asynchronous request means that you cant return it when it is in progress so if you want return any thing from ajax you must call it's events like success and error.so your code must like below:  `} date='asnwered at  2-feb-2020 12.30 pm' />

        <UserDiscussionComments commentor='Kamran Ahmed' comment={` ajax is asynchronous request means that you cant return it when it is in progress so if you want return any thing from ajax you must call it's events like success and error.so your code must like below:  `} date='asnwered at  3-july-2020 12.30 pm' />


      </UserDiscussionStructure>

      <Footer />

    </div >
  )
}




