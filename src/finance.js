import './App.css';
import {allvendors} from './App';

function finance() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
                
        <div class="d-flex justify-content-center">
            <div class="w-75 p-3">
                <div class="jumbotron jumbotron-fluid">
                    <div class="alert alert-light" role="alert">
                        <h1 className="display-2">Finance Page</h1>
                    </div>
                    <hr/>
                    <h1 className="display-4">View</h1>
                    <p className="lead">View all project information here</p>
                    <h4>Projects:</h4>
                    <p>ID: Project Name - Company - Cost</p>
                    <ul>
                        {allvendors.map(s => (
                        <div><p className="lead"> {s.id}: {s.project_name} - {s.vendor_name} - ${s.project_cost}</p></div> 
                        ))}
                    </ul>
                    <hr/>

                    <h1 className="display-4">Add</h1>
                    <p className="lead">Add a new project here</p>
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
                        <div class="input-group">
                            <div class="input-group-prepend">
                            <div class="input-group-text">$</div>
                            </div>
                            <input type="text" class="form-control" placeholder="Edit Cost" id="cost"></input>
                        </div>
                        <br></br>
                        <button type="submit" class="btn btn-secondary" onClick={add}>Submit</button>
                    </form>

                    <hr/>
                    <h1 className="display-4">Edit</h1>
                    <p className="lead">Edit an existing project here</p>
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
                        <input type="text" class="form-control" placeholder="Project Name" id="projectEdit"></input>
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend">
                        <div class="input-group-text">$</div>
                        </div>
                        <input type="text" class="form-control" placeholder="Edit Cost" id="costEdit"></input>
                    </div>
                    <br></br>
                    <button type="submit" class="btn btn-secondary" onClick={edit}>Submit</button>

                    </form>
                    <hr/>

                    <h1 className="display-4">Delete</h1>
                    <p className="lead">Delete an existing project here</p>
                        <form class="w-50 mx-auto">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                <div class="input-group-text">#</div>
                                </div>
                                <input type="number" class="form-control" placeholder="Project ID" id="idDelete"></input>
                            </div>
                            <br></br>
                            <button type="submit" class="btn btn-secondary" onClick={del}>Submit</button>

                        </form>
                </div>
            </div>
        </div>

      </div>
    );
  }
  function add()
  {
    const vendor = document.getElementById('vendorName').value
    const project = document.getElementById('projectName').value
    const cost = document.getElementById('cost').value

    const newProject = {
        "id" : allvendors.length,
        "vendor_name" : vendor,
        "project_name" : project,
        "project_cost" : cost
    }

    //console.log(file.get());
    allvendors.push(newProject);
    localStorage.setItem("vendorsUpdate", JSON.stringify(allvendors))

  }
  function edit()
  {
    const id = document.getElementById('idEdit').value
    const cost = document.getElementById('costEdit').value
    const project = document.getElementById('projectEdit').value
    if(allvendors.length >= id)
    {
        allvendors[id].project_cost = cost;
        allvendors[id].project_name = project;
    }
    localStorage.setItem("vendorsUpdate", JSON.stringify(allvendors))
  }
  function del()
  {
    var id = document.getElementById('idDelete').value
    if(allvendors.length >= id)
    {
        delete allvendors[id]
    } 
    localStorage.setItem("vendorsUpdate", JSON.stringify(allvendors))
  }
  export default finance;
  