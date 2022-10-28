function Profile() {
    return (
        <div>
            <section class="h-100 gradient-custom-2">

                <div class="card">
                    <div class=" rounded-top text-white d-flex flex-row" style={{ height: "200px", backgroundColor: "#000" }} >
                        <div class="ms-4 mt-5 d-flex flex-column" style={{ width: "150px" }}>
                            <img src="https://i.pinimg.com/736x/c6/3a/5a/c63a5a2a6186239e2a3aa170aac5de55.jpg"
                                alt="Generic placeholder image" class="img-fluid img-thumbnail mt-4 mb-2"
                                style={{ width: "150px", zIndex: "1" }} />

                        </div>
                        <div class="ms-3" style={{ marginTop: "130px" }}>
                            <h5>Topiksit0</h5>

                        </div>
                    </div>
                    <div class="p-4 text-black" style={{ backgroundColor: "#f5f5f5" }}>
                        <div class="d-flex justify-content-end text-center py-1">

                            <div class="px-5 ">
                                <p class="mb-1 h5">1026</p>
                                <p class="small text-muted mb-0">Followers</p>
                            </div>
                            <div>
                                <p class="mb-1 h5 px-3">478</p>
                                <p class="small text-muted mb-0">Following</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-body p-4 text-black">
                        <div class="mb-5">
                            <p class="lead fw-normal mb-1">About</p>
                            <div class="p-4 rounded-top" style={{ backgroundColor: "#f5f5f5" }}>
                                <p class="font-italic mb-1">Hello!! I'm Noel, I sell manga related art and I offer comissions about NSFW furry uwu</p>

                            </div>
                        </div>
                    </div>
                    <div  class="row justify-content-md-center">
                        <div class="card-body p-4 text-black  text-center col col-8">
                            <div class="mb-5 rounded-top align-items-center" style={{ backgroundColor: "#f5f5f5" }}>
                                <div class="btn-group px-4 py-3 ">
                                    <input type="radio" class="btn-check " name="options" id="radio1" autocomplete="off" />
                                    <label class="btn btn-dark" for="radio1">My products</label>

                                    <input type="radio" class="btn-check" name="options" id="radio2" autocomplete="off" />
                                    <label class="btn btn-dark" for="radio2">My services</label>

                                    <input type="radio" class="btn-check" name="options" id="radio3" autocomplete="off" />
                                    <label class="btn btn-dark" for="radio3">Purchase History</label>
                                </div>
                                <div class="p-4" style={{ backgroundColor: "#f8f9fa" }}>


                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </section>
        </div>

    );
}

export default Profile;