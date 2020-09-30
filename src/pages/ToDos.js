import {
    DefaultButton,
    Dialog,
    DialogFooter,
    DialogType,
    IconButton,
    Label,
    PrimaryButton,
    Stack,
    TextField
} from "@fluentui/react";
import React, { useEffect, useState } from "react";
import { useTheme } from "../theming/ThemeContext";

function AddTodo({ onClick }) {
    const [text, setText] = useState("");
    const addTodo = () => {
        onClick(text);
        setText("");
    };
    const checkForEnter = e => (e.keyCode === 13 ? addTodo() : null);
    const textChanged = e => setText(e.target.value);
    return (
        <Stack>
            <Stack horizontal>
                <Stack.Item grow>
                    <TextField
                        onKeyUp={checkForEnter}
                        placeholder="Add new item"
                        value={text}
                        onChange={textChanged}
                    />
                </Stack.Item>
                <PrimaryButton disabled={text === ""} onClick={addTodo}>
                    Add
                </PrimaryButton>
            </Stack>
        </Stack>
    );
}

const DeleteButton = ({ onClick }) => (
    <IconButton
        iconProps={{ iconName: "trash" }}
        className="clearButton"
        onClick={onClick}
    />
);

const ConfirmationDialog = ({ shown, title, showDialog, remove }) => (
    <Dialog
        hidden={!shown}
        dialogContentProps={{
            type: DialogType.normal,
            title: "Delete",
            subText:
                "Are you sure you want to delete this item? This cannot be undone."
        }}
        modalProps={{
            isBlocking: false
        }}
    >
        <DialogFooter>
            <Label text={title} />
            <PrimaryButton text="Yes" onClick={remove} />
            <DefaultButton text="No" onClick={() => showDialog(false)} />
        </DialogFooter>
    </Dialog>
);

function TodoItem({ item: { title, id }, deleteTodo }) {
    const [dialogShown, showDialog] = useState(false);
    const remove = id => {
        deleteTodo(id);
        showDialog(true);
    };
    return (
        <Stack>
            <Stack
                horizontal
                verticalAlign="center"
                horizontalAlign="space-between"
            >
                <Label>{title}</Label>
                <DeleteButton onClick={() => showDialog(!dialogShown)} />
            </Stack>
            <ConfirmationDialog
                shown={dialogShown}
                remove={() => remove(id)}
                showDialog={showDialog}
            />
        </Stack>
    );
}

const TodoList = ({ items, deleteTodo }) => (
    <Stack tokens={{ childrenGap: 10 }}>
        {items.length > 0 ? (
            items.map(item => (
                <TodoItem item={item} key={item.id} deleteTodo={deleteTodo} />
            ))
        ) : (
            <Label>Todo list is empty...</Label>
        )}
    </Stack>
);

const ToDos = () => {
    const [data, setData] = useState([]);
    const [
        {
            theme: { palette }
        }
    ] = useTheme();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
            .then(response => response.json())
            .then(obj => setData(obj));
    }, []);

    const newId = () =>
        Math.max.apply(
            Math,
            data.map(o => o.id)
        ) + 1;

    const addTodo = title => {
        if (title !== "") {
            const id = newId();
            const newTodos = [...data, { id, title }];
            setData(newTodos);
        }
    };

    const deleteTodo = id => {
        const newTasks = data.filter(todo => todo.id !== id);
        setData(newTasks);
    };

    return (
        <>
            <Stack
                horizontalAlign="center"
                style={{
                    background: palette.neutralLighterAlt,
                    padding: "1rem 2rem",
                    marginTop: "1rem"
                }}
            >
                <h3>Todo App using Fluent UI &amp; React</h3>
                <Stack style={{ width: 600 }} tokens={{ childrenGap: 25 }}>
                    <AddTodo onClick={addTodo} />
                    <TodoList items={data} deleteTodo={deleteTodo} />
                </Stack>
            </Stack>
        </>
    );
};

export default ToDos;
