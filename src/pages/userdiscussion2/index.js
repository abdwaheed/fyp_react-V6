import React from 'react'
import Searchbar from '../../components/searchbar';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import UserDiscussionStructure from '../../components/userdiscussionstructure';
import { Link } from 'react-router-dom';

export default function UserDiscussion1() {
  return (
    <div>
      <Navbar />
      <Searchbar />

      <UserDiscussionStructure heading='Reply to an existing question'>

        <div className="py-2 pt-4">
          <Link to='/userdiscussion3' class="pt-4 pb-0 px-5 bold text-decoration-none">1. What is 404 not found error
          </Link>
        </div>

        <div className="py-2">
          <Link to='/userdiscussion3' class="pt-4 pb-0 px-5 bold text-decoration-none">2. Syntax error, not found.
          </Link>
        </div>

        <div className="py-2 pb-4">
          <Link to='/userdiscussion3' class="pt-4 pb-0 px-5 bold text-decoration-none">3. Program failure due to error in code.
          </Link>
        </div>

      </ UserDiscussionStructure >

      <Footer />

    </div >
  )
}




