function Taskinfo(){
    const taskName = document.getElementById("id-task-name").value;
    const taskDip = document.getElementById("id-task-dip").value;
    const time = document.getElementById("id-task-date").value;
    const date =document.getElementById("id-task-time").value;
    let taskInfo ={
        taskName:taskName,
        taskDiscription:taskDip,
        taskDate:date,
        taskTime:time
    }
    return taskInfo;
}
function ShowTask(){
    const addedtask = document.getElementById("id-added-task-title");
    const taskdata = Taskinfo()

    //div class task content
    const TaskContent =document.createElement("div");
    TaskContent.classList.add("task-content");

    //input radio button
    const inputradio = document.createElement("input");
    inputradio.setAttribute("type","radio");
    inputradio.setAttribute("name","select-task");

    //div class for task info
    const taskInfo =document.createElement("div")
    taskInfo.classList.add("task-info");

    //label for task info
    const labelName = document.createElement("label")
    const labeldis = document.createElement("label")
    const labeltime = document.createElement("label")
    const labeldate = document.createElement("label")

    labelName.setAttribute("for","task-name-info")
    labeldis.setAttribute("for","task-discription-info")
    labeldate.setAttribute("for","task-date-info")
    labeltime.setAttribute("for","task-time-info")

    labelName.setAttribute("style","font-size:25px")
    labeldis.setAttribute("style","font-size:15px")
    labeldate.setAttribute("style","font-size:15px")
    labeltime.setAttribute("style","font-size:15px")

    //add task data to labels
    labelName.innerHTML = taskdata.taskName;
    labeldis.innerHTML = taskdata.taskDiscription;
    labeldate.innerHTML = taskdata.taskDate;
    labeltime.innerHTML = taskdata.taskTime;
    
    //append task info to task info div class
    taskInfo.appendChild(labelName);
    taskInfo.appendChild(labeldis);
    taskInfo.appendChild(labeldate);
    taskInfo.appendChild(labeltime);

    //append task info div class to task content
    TaskContent.appendChild(inputradio)
    TaskContent.appendChild(taskInfo)

    //add task component to html page
    addedtask.appendChild(TaskContent)

}
function Savedata(){
    const taskinfo = Taskinfo()
    const strObj = JSON.stringify(taskinfo)
    localStorage.setItem('todoList',strObj)
    console.log(localStorage)

}
function retriveData(){
    let localdata = JSON.parse(localStorage.getItem('todoList'));
    console.log("retrive : " + localdata.taskName)


}


// console.log(taskdata.taskName)
// console.log(taskdata.taskDiscription)
// console.log(taskdata.taskDate)
// console.log(taskdata.taskTime)