import React from "react";

import Navbar from "../components/navbar";
import Menu from "../components/menu";

import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default (props) => (
    <div className="container">
        <Navbar user={"Isaac Araujo"} />
        <main className="container-Forum">
            <form className="bg-light mt-5 p-3 ">
                <div className="form-group ">
                    <label htmlFor="inputTitle">
                        {" "}
                        <strong> Título</strong>{" "}
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        name=""
                        id="inputTitle"
                    />
                </div>
                <div class="form-group ">
                    <label for="exampleFormControlTextarea1">Texto</label>
                    <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                    ></textarea>
                    <footer className="d-flex justify-content-between mt-3">
                        <Link to="/dash">
                            <button className="btn btn-primary">
                                <FaArrowLeft />
                            </button>
                        </Link>
                        <button className="btn btn-primary">Postar</button>
                    </footer>
                </div>
            </form>
        </main>
    </div>
);
