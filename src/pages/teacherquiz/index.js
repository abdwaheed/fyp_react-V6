import React from 'react'
import Navbar from '../../components/navbar'
import Searchbar from '../../components/searchbar'
import Footer from '../../components/footer'
import TeacherStructure from '../../components/TeacherStructure'
import { Link } from 'react-router-dom'

export default function TeacherQuiz() {
  return (
    <>
      <Navbar />
      <Searchbar />

      <TeacherStructure>
        <div class="intended-learners my-5">
          <div class="dog d-flex justify-content-between overflow-hidden">
            <div>
              <h3 class="py-4 px-5">ADD QUIZ</h3>
            </div>

            {/* <div class="mt-4"><button class="me-4 py-2"><Link to="/teachereditlecture"
              class="text-dark text-decoration-none">
              EDIT LECTURE</Link></button></div> */}
          </div>

          <p class="pt-4 pb-0 px-5 bold">Enter Quiz Number
          </p>


          <div class="intend-lrn-search mb-3">
            <input class="form-control py-3 ps-3" type="search" placeholder="Example:Enter Lecture Number to Add / Edit " aria-label="Search" />
          </div>

          <p class="pt-4 pb-0 px-5 bold">Enter Question No.1
          </p>


          <div class="intend-lrn-search mb-3">
            <input class="form-control py-3 ps-3" type="search" placeholder="Example: Enter Question Here "
              aria-label="Search" />
          </div>

          <p class="pt-4 pb-0 px-5 bold">Enter Options In Give Below Text Boxes
          </p>


          <div class="intend-lrn-search mb-3">
            <input class="form-control py-3 ps-3" type="search" placeholder="Enter Option 1 "
              aria-label="Search" />
          </div>
          <div class="intend-lrn-search mb-3">
            <input class="form-control py-3 ps-3" type="search" placeholder="Enter Option 2 "
              aria-label="Search" />
          </div>
          <div class="intend-lrn-search mb-3">
            <input class="form-control py-3 ps-3" type="search" placeholder="Enter Option 3 "
              aria-label="Search" />
          </div>
          <div class="intend-lrn-search mb-3">
            <input class="form-control py-3 ps-3" type="search" placeholder="Enter Option 4 "
              aria-label="Search" />
          </div>


          <p class="pt-4 pb-0 px-5 bold">Enter Correct Option Number
          </p>


          <div class="intend-lrn-search mb-3">
            <input class="form-control py-3 ps-3" type="search" placeholder="Example: 1 or 2 or 3 or 4 "
              aria-label="Search" />
          </div>



          <div class="intend-lrn-search mb-5 py-3">
            <button class="btn btn-dark w-50 p-2" type="submit"><a class="text-decoration-none text-white"
              href="./intender-learners.html">Save</a></button>
          </div>

        </div>

      </TeacherStructure>

      <Footer />
    </>
  )
}
