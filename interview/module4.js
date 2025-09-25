//JIRA board


// Requirements
// 1.JSON
// UI Design


// boardID & name, columns arry of obj

//tasks obj{ title , desc, status, id}


{
    "boardId": 'Kushank Project',
    "boardName": 'Frontend Board',
    "columns": [{
        "id": '395789',
        "name": 'dkjvbjk',
        "status": "IN-PRogress",
        "tasksIds": ["task-1", "task-2"]
    }],
    "tasks": {
        "tasks-1": {
            "id": "83256589",
            "title": "GV-Dashboard",
            "desc": "kjsdvbjkvbskjvb iewhekih",
            "status": "Todo"
        }
    }
}

// GET: /api/boards/{board-id}

{
    "boardId": 'Kushank Project',
    "boardName": 'Frontend Board',
    "columns": [{
        "id": '395789',
        "name": 'dkjvbjk',
        "status": "IN-PRogress",
        "tasksCount": 20
        // "tasksIds": ["task-1", "task-2"]
    }],
    "totalColumns": 400,
    'Pagination': {
        "page": 1,
        "pageSize": 20,
        "hasMore": true
    }
    // "tasks": {
    //     "tasks-1": {
    //         "id": "83256589",
    //         "title": "GV-Dashboard",
    //         "desc": "kjsdvbjkvbskjvb iewhekih",
    //         "status": "Todo"
    //     }
    // }
}


// GET API for Tasks based on Columns

// /api/columns/{columnId}/tasks?page=1&pageSize=50

{
    "columnId": 'col-todo',
    "totalTasks": 20,
    "tasks": {
        "tasks-1": {
            "id": "83256589",
            "title": "GV-Dashboard",
            "desc": "kjsdvbjkvbskjvb iewhekih",
            "status": "Todo"
        }
    },
    'pagination': {
        "page": 1,
        "pageSize": 20,
        "hasMore": true
    }
}

import { List, Grid } from "react-virtualised";

// Boost Performance
//Memory Usage


<List 
 width={400}
 height={600}
 rowCount={5}
 rowHeight={10}
/>

<Grid 

/>



