import React from "react";

import "./styles.css";

import PostList from "../components/postList";
import Header from "../components/header";

export default (props) => (
    <div className="container">
        <main>
            <div
                class="list-group"
                style={{ width: "560px", margin: "0 auto" }}
            >
                <Header user={"Isaac Araujo"} />
                <PostList
                    title={"Como estudar React Js"}
                    time={"Há 3 dias"}
                    content={
                        "Iae pessoal, estou querendo dicar para poder dominar essa fantástica lib que está revolucionando a forma como idaidsidasmdisamsdsdsdsdsdsdsdsdsdsdsssssssssssssssssss"
                    }
                    autor={"Isaac Araujo"}
                    last={"Rocket Seat"}
                />

                <PostList
                    title={"Como estudar React Js"}
                    time={"Há 3 dias"}
                    content={
                        "Iae pessoal, estou querendo dicar para poder dominar essa fantástica lib que está revolucionando a forma como idaidsidasmdisamsdsdsdsdsdsdsdsdsdsdsssssssssssssssssss"
                    }
                    autor={"Isaac Araujo"}
                    last={"Rocket Seat"}
                />
            </div>
        </main>
    </div>
);
