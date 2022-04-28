import React,{useState} from 'react';

export function SearchInput(props) {

   const list = ["Banana","Apple","Orange","Mango"]

   const [filterList,setFilterList]=useState(list);

   const handleSearch = (event)=>{
     if(event.target.value===''){
       setFilterList(list);
       return;
     }

     const filterValues = list.filter(
       (item)=>item.toLowerCase().indexOf(event.target.value.toLowerCase())!== -1
     );
     setFilterList(filterValues);
   }

  return (
    <div className='App'>
      <div className='form-group'>
          <label>Search</label>
          <input name="search" type="text" onChange={handleSearch}/>
          {
            filterList && filterList.map((item)=>(<div>{item}</div>))
          }
      </div>
     
    </div>
  );
}