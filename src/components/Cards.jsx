import '../CSS/Cards.css'
const userdata = [
    {
        name : "Aswath",
        des : "Software developer",
        Skills :["HTML","CSS","JS","java","c","c++"],
    },
    {
        name : "Gunal",
        des : "Frontend developer",
        Skills :["HTML","CSS","JS","flutter","ReactNative","java"],
    },
    {
        name : "Ashwin",
        des : "React developer",
        Skills :["HTML","CSS","JS","Reactjs","Nodejs","c++",],
    },
    {
        name : "Arjun",
        des : "java developer",
        Skills :["HTML","CSS","JS","c","java","embeddedc"],
    },
]
function User(props){
    return(
    <div className="card">
	    <div className="content">
		    <img src="https://picsum.photos/id/64/150/150" alt="" title="" />
		    <h3>{props.name}<small>{props.des}</small></h3>
		    <div className="skill">
                <h6>Skills</h6>
                <ul>{props.skills.map((skill,index)=>(
                    <li key={index}>{skill}</li>
                ))}</ul>
            </div>
	    </div>
    </div>
    );
}
export const Cards = () => {
  return <>
  {
    userdata.map((user,index)=>(
        <User key={index} 
        name={user.name}
        des={user.des}
        skills={user.Skills}/>
    ))
  }
  </>
}

{/* <User name = "Ashwin R" des ="React.js Developer" skills={["HTML","CSS","JS","Reactjs","Nodejs"]} />; */}
