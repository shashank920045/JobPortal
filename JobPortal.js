import React,{useState,useEffect} from 'react';
import './jobs.css';
import {jobs} from './data'
import Job from './Job'
import Header from './Header'

function JobPortal(props) {  
    
    
    
    const [data,setData]= useState([]);
    const [selectedKeywords,setSelectedKeywords] = useState([]);
     const[filteredData,setFilteredData]= useState([]);
   
    useEffect(()=>{setData(jobs);setFilteredData(jobs);},[])
    useEffect(()=>{
        if(selectedKeywords.length>0)
        {
             setFilteredData(data.filter(item=> 
                                                 {return (selectedKeywords.every(key=>
                                                                                 {return(
                                                                                     item.role===key||
                                                                                     item.level===key||
                                                                                     item.languages.includes(key)||
                                                                                     item.tools.includes(key)
                                                                                     )
                                                                                 }
                                                                                )
                                                         )
                                                 }
                                                )
                             );
        }
         else{
               setFilteredData(jobs); 
         }
    }, [selectedKeywords])
           
      return(
            
         <div>
           <div class="header">
           <h1 > Job Portal</h1>
           </div>
          
            {selectedKeywords.length>0 && <Header selectedKeywords={selectedKeywords} setSelectedKeywords={setSelectedKeywords}/>}
      
            <div class="jobs">
            {filteredData.map(job => <Job 
                                            key={job.id} 
                                            jobInfo={job} 
                                            selectedKeywords={selectedKeywords} 
                                            setSelectedKeywords={setSelectedKeywords}/>)}
            </div>
         </div>
          )
    
}

export default JobPortal;
