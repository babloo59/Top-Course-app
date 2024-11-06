import React, { useState } from 'react';
import Card from './Card'

const Cards = ({courses,category}) => {

    

    const [likedCourses, setLikedCourses] = useState([]);

    // returns you a list of all courses received from the api response
    const getCourses = () => {
        if(category === "All") {
            let allCourses = [];
            // console.log("printing courses");
            // console.log(courses);
            Object.values(courses).forEach( (coursesCategory) => {
                coursesCategory.forEach((course) => {
                    allCourses.push(course);
                });
            });
            return allCourses;
        }
        else {
            // main sirf specific category ka data array karunga
            return courses[category];
        }
    }

    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
             {
        getCourses()?.map((course) => {
          return (<Card key={course.id}  course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />)
        })
      }
        </div>
    )
}

export default Cards;