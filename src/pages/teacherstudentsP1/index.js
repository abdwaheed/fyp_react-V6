import React from 'react'
import Navbar from '../../components/navbar'
import Searchbar from '../../components/searchbar'
import Footer from '../../components/footer'
import TeacherStructure from '../../components/TeacherStructure'
import { Link } from 'react-router-dom'

export default function TeacherStudentsP1() {
  return (
    <div>

      <Navbar />
      <Searchbar />

      <TeacherStructure>
        {/* <div class="dashboard-form py-3 px-5 my-5" style={{ overflow: 'auto' }}>
          <h3 class="py-2">Students List</h3>
          <table class="table table-bordered py-4">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Std_Name</th>
                <th scope="col">Std_Email</th>
                <th scope="col">Course Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">1</td>
                <td>Mark</td>
                <td>abc @gmail.com</td>
                <td>JavaScript,Java,C++</td>
              </tr>
              <tr>
                <td scope="row">2</td>
                <td>Jacob</td>
                <td>Thornton @gmail.com</td>
                <td>JavaScript,Java,C++</td>
              </tr>
              <tr>
                <td scope="row">3</td>
                <td>Larry</td>
                <td>Larry @gmail.com</td>
                <td>Data Structure,JavaScript,Java,C++</td>
              </tr>
            </tbody>
          </table>
        </div> */}

        <div className="available-courses py-5" style={{ backgroundColor: 'white' }}>
          <div className="courses border" >

            <div className='row px-5 py-3'>

              <div className="col-md-4 py-5">
                <div class="card co" >
                  <img class="card-img-top" src="./images/avail1.png" alt="Card image cap" />
                  <div class="card-body">
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    {/* <h4>IOT's</h4> */}
                    <h3><Link to="/teacherstudentsP2" className='text-decoration-none'>Java Script</Link></h3>
                  </div>
                </div>
              </div>

              <div className="col-md-4 py-5">
                <div class="card co">
                  <img class="card-img-top" src="./images/avail2.jpg" alt="Card image cap" />
                  <div class="card-body">
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    {/* <h4>Data Structure</h4> */}
                    <h3><Link to="/teacherstudentsP2" className='text-decoration-none'>Python</Link></h3>
                  </div>
                </div>
              </div>

              <div className="col-md-4 py-5">
                <div class="card co">
                  <img class="card-img-top" src="./images/avail3.jpg" alt="Card image cap" />
                  <div class="card-body">
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    {/* <h4>C++</h4> */}
                    <h3> <Link to="/teacherstudentsP2" className='text-decoration-none'>C++</Link></h3>
                  </div>
                </div>
              </div>

            </div>
          </div>


        </div>


      </TeacherStructure >

      <Footer />

    </div >
  )
}
