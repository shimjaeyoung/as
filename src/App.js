import { useState } from 'react';
import "./App.css";
import { Header, CreateTodoForm, CardSection} from ".index.css"

function App() {
    const [todoList, setTodoList] = useState([
        {
            id: 0,
            title: "리액트 공부하기",
            text: "리액트 1주차 과제",
            isDone: false,
        },
        {
            id: 1,
            title:"JS 공부하기",
            text: "골머리 아파요",
            isDone: true,
        },
    ]);

    const onSubmitHandler = (event, todoTitle, todoText) => {
        event.preventDefault();
        if (event.target.title.value && event.target.text.value) {
            const newTodoList = [
                ...todoList,
                {
                    id: todoList.length === 0 ? 0 : todoList[todoList.length - 1],
                    title: todoTitle,
                    text: todoText,
                    isDone: false,
                },
            ];
            setTodoList(newTodoList);
            event.target.title.value = "";
            event.target.text.value = "";
        } else {
            alert("제목과 내용은 비면 안됩니다.")
        }
    }
}