import './App.css';
import vendors from "./vendors.json";

var allvendors = '';
if(JSON.parse(localStorage.getItem("vendorsUpdate")).length > vendors.length)
  allvendors = JSON.parse(localStorage.getItem("vendorsUpdate"));
else
  allvendors = vendors;


var vendorsTemp = []
for(let i = 0; i < allvendors.length; i++)
{
  if(allvendors[i] !== null)
    vendorsTemp.push(allvendors[i])
}
allvendors = vendorsTemp 

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
      
      <div class="d-flex justify-content-center">
        <div class="w-75 p-3">
          <div class="jumbotron jumbotron-fluid">
            <div>
              <div class="alert alert-light" role="alert">
                <h1 className="display-2">Product Manager Page</h1>
              </div>
              <hr/>
              <h1 className="display-4">View</h1>
              <p className="lead">View all vendor information here</p>
              <h4>Vendors:</h4>
              <ul>
                {allvendors.map(s => (
                 <div><p className="lead"> {s.id}: {s.vendor_name} </p></div> 
                ))}
              </ul>
              <hr/>
              <h1 className="display-4">Add</h1>
              <p className="lead">Add a new vendor here</p>
              <form class="w-50 mx-auto">
                <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">@</div>
                    </div>
                    <input type="text" class="form-control" placeholder="Vendor Name" id="vendorName"></input>
                  </div>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">@</div>
                    </div>
                    <input type="text" class="form-control" placeholder="Project Name" id="projectName"></input>
                  </div>
                  <br></br>
                  <button type="submit" class="btn btn-secondary" onClick={add}>Submit</button>
                </form>
              <hr/>
              <h1 className="display-4">Edit</h1>
              <p className="lead">Edit an existing vendor here</p>
              <form class="w-50 mx-auto">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">#</div>
                    </div>
                    <input type="number" class="form-control" placeholder="Vendor ID" id="idEdit"></input>
                  </div>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">@</div>
                    </div>
                    <input type="text" class="form-control" placeholder="Vendor Name" id="vendorEdit"></input>
                  </div>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">@</div>
                    </div>
                    <input type="text" class="form-control" placeholder="Project Name" id="projectEdit"></input>
                  </div>
                  <br></br>
                  <button type="submit" class="btn btn-secondary" onClick={edit}>Submit</button>

              </form>
              <hr/>
              <h1 className="display-4">Delete</h1>
              <p className="lead">Delete an existing vendor here</p>
              <form class="w-50 mx-auto">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">#</div>
                    </div>
                    <input type="number" class="form-control" placeholder="Vendor ID" id="idDelete"></input>
                  </div>
                  <br></br>
                  <button type="submit" class="btn btn-secondary" onClick={del}>Submit</button>

              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
function add(){ 
  const vendor = document.getElementById('vendorName').value
  const project = document.getElementById('projectName').value
  console.log(vendor);
  console.log(project);
  const newVendor = {
    "id" : allvendors.length,
    "vendor_name" : vendor,
    "project_name" : project,
    "project_cost" : null
  }

  //console.log(file.get());
  allvendors.push(newVendor);
  localStorage.setItem("vendorsUpdate", JSON.stringify(allvendors))

}
function edit(){
  const id = document.getElementById('idEdit').value
  const vendor = document.getElementById('vendorEdit').value
  const project = document.getElementById('projectEdit').value
  if(allvendors.length >= id)
  {
    allvendors[id].vendor_name = vendor;
    allvendors[id].project_name = project;
  }
  localStorage.setItem("vendorsUpdate", JSON.stringify(allvendors))
  console.log(allvendors)
}
function del(){
  var id = document.getElementById('idDelete').value
  if(allvendors.length >= id)
  {
    delete allvendors[id]
  } 
  console.log(allvendors)
  localStorage.setItem("vendorsUpdate", JSON.stringify(allvendors))
}
export {allvendors};
export default App;
