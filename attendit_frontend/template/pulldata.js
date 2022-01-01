const table = document.querySelector('#att');

const btn =querySelector('#btn01');

document.getElementById("myBtn").addEventListener("click", function() {
    console.log("sfdsfsd")
  });
function populate(obj) {
    for (const obj of objs) {
        let tr = document.createElement('tr');
        let th1 = document.createElement('th');
        let th2 = document.createElement('th');
        table.appendChild(tr);
       
       let user = obj.Students;
       th1.innerHTML = JSON.stringify(user.userID);
       th2.internalHTML = JSON.stringify(FullName);
       tr.appendChild(th1);
       tr.appendChild(th2);




    }
}
