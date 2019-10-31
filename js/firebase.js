$(document).ready(function () {
    database.collection('homework').get().then((data) => {
        var result = "";
        data.forEach(element => {
            const { name, post, profile_img, description } = element.data();
            result +=
                `
                <div class="card">
                    <div class="card-header">
                        <img src="${profile_img}" width="50px" height="50px" class="rounded-circle">
                        ${name}
                        <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#myModal">View</button>
                    
                      <!-- The Modal -->
                      <div class="modal fade" id="myModal">
                        <div class="modal-dialog">
                          <div class="modal-content">
                          
                            <!-- Modal Header -->
                            <div class="modal-header">
                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            
                            <!-- Modal body -->
                            <div class="modal-body">
                            <img src="${profile_img}" class="img-fluid">
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card-body">
                        <img src="${profile_img}" class="img-fluid">
                        <p>${description}</p>
                    </div>
                    <div class="card-footer">
                        
                    </div>
                </div>
            `
        });
        $("#card").append(result);
    })
})