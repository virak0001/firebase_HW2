$(document).ready(function () {
  database.collection('homework').get().then((data) => {
    var result = "";
    data.forEach(element => {
      const { name, post, profile_img, description } = element.data();
      result +=
        `
                <div class="card mt-5">
                    <div class="card-header">
                        <img src="${profile_img}" width="50px" height="50px" class="rounded-circle">
                        ${name}
                        <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#myModal${element.id}">View</button>
                    
                      <!-- The Modal -->
                      <div class="modal fade" id="myModal${element.id}">
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
                        <img src="${post}" class="img-fluid">
                        <p>${description}</p>
                    </div>
                    <div class="card-footer">
                        <input type="button" class="btn btn-danger float-right" onclick="udelete('${element.id}')" value="Delete">
                    </div>
                </div>
            `;
    });
    $("#card").append(result);
  });
  var form = "";
  form +=
    `
      <div class="modal fade" id="modal" role="dialog">
      <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
        <form action="#" method="post">
        <div class="form-group">
                <label for="name">Name</label><br>
                <input class="form-control" type="text" placeholder="username" id="name">
        </div>
        <div class="form-group">
                <label for="profile">Profile</label><br>
                <input class="form-control" type="text" placeholder="profile picture" id="profile">
        </div>
        <div class="form-group">
                <label for="post">Post</label><br>
                <input class="form-control" type="text" placeholder="Post" id="post">
        </div>
        <div class="form-group">
                <label for="yourMine">What is your mine?</label><br>
                <input class="form-control" type="text" placeholder="description" id="description">
        </div>
        <input type="button" class="btn btn-block btn-success" id="submit" value="submit">
    </form>
        </div>
      </div>
      </div>
    </div>
     
    `;
  $("#card").append(form);
  $("#submit").on('click', function() {
     $name = $("#name").val();
     $profile = $("#profile").val();
     $post = $("#post").val();
     $description = $("#description").val();
     database.collection("homework").add({
       name:$name,
       profile_img:$profile,
       post:$post,
       description:$description
     })
  })
})
    function udelete(userID) {
      database.collection("homework").doc(userID).delete();
    }