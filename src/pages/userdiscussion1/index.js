import React from 'react'
import Searchbar from '../../components/searchbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import UserDiscussionStructure from '../../components/userdiscussionstructure';
import UserDiscussionButton from '../../components/userdiscussionbutton';
import { Link } from 'react-router-dom';
import UserDiscussionTextarea from '../../components/userdiscussiontextarea';

export default function UserDiscussion1() {
  return (
    <div>
      <Navbar />
      <Searchbar />

      <UserDiscussionStructure heading='FORUM'>

        {/* <h3 className='px-5 pt-4 pb-2'>Ask A Question</h3> */}

        <p class="pt-4 pb-0 px-5 bold">Enter your question Title.
        </p>

        {/* <div class=""> */}

        <div class="intend-lrn-search mb-3">
          <input type='text' class="form-control py-3 ps-3" rows='8' type="textarea" placeholder="Example: Enter Question Title here " aria-label="Search" />
        </div>






        {/* </div> */}

        <p class="pt-2 pb-0 px-5 bold">Enter your question Description.
        </p>

        <div class="px-5 mb-3">
          <UserDiscussionTextarea placeholder='Example: Add your comment here !' />
        </div>
        <div class="px-5 mb-3">
          <UserDiscussionButton text='Ask A Question' href='/teachereditlecture' />
        </div>

        <div class="px-5 overflow-hidden mt-5 mb-5">
          <UserDiscussionButton text='View / Reply exisiting Question' href='/userdiscussion2' />
        </div>

      </UserDiscussionStructure>

      <Footer />

    </div>
  )
}




