import React,{useParams} from 'react';

function EditId({array}) {
    const id = useParams().id;
    const data = array.find(n => n.id === Number(id));
    console.log(data)
    return (
        <div>
            <p>{data.id}</p>
            <p>{data.name}</p>
        </div>
    )
}

export default EditId;