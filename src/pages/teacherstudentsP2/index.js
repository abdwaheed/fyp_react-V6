import React from 'react'
import Navbar from '../../components/navbar'
import Searchbar from '../../components/searchbar'
import Footer from '../../components/footer'
import TeacherStructure from '../../components/TeacherStructure'
import { Link } from 'react-router-dom'

export default function TeacherStudentsP2() {
  return (
    <div>

      <Navbar />
      <Searchbar />

      <TeacherStructure>
        <div class="dashboard-form py-3 px-5 my-5" style={{ overflow: 'auto' }}>
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
        </div>

      </TeacherStructure >

      <Footer />

    </div >
  )
}
