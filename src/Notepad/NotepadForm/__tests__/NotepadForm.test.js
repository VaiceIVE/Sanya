import React from "react";
import { screen, fireEvent, within, render } from "@testing-library/react";
import { describe } from '@jest/globals';
import NotepadForm from "../index";

describe("NotepadForm", () => {
    const notepadColors = [
        {
            value: 'rgba(253, 113, 175, 1)',
            label: 'Красный',
        },
        {
            value: 'rgba(85, 119, 255, 1)',
            label: 'Синий',
        },
        {
            value: 'rgba(0, 184, 132, 1)',
            label: 'Зеленый',
        },
    ];
    const [, secondOption] = notepadColors;
    const title = "title";
    const description = "description";
    const date = new Date().toLocaleDateString();

    const fillInTitle = async () => {
        const titleInputEl = await screen.findByRole("textbox", {
        name: /title/i,
        });
        fireEvent.change(titleInputEl, { target: { value: title } });
    };

    const fillInDescription = async () => {
        const descriptionInputEl = await screen.findByRole("textbox", {
        name: /description/i,
        });
        fireEvent.change(descriptionInputEl, { target: { value: description } });
    };

    const fillInDate = async () => {
        const dateInputEl = await screen.getByTestId("date");
        fireEvent.change(dateInputEl, { target: { value: date } });
    };

    const selectColor = async () => {
        const colorSelectButtonEl = await screen.findByRole("combobox", {
            name: /color/i,
        });
        fireEvent.mouseDown(colorSelectButtonEl);
        const newsletterSelectEl = await screen.findByText("Белый");
        fireEvent.change(colorSelectButtonEl, newsletterSelectEl);
    };

    const handleAdd = async () => {
        const addButtonEl = await screen.findByRole("button", {
            name: /add/i,
        });
        fireEvent.submit(addButtonEl);
    };

    it("ok", async () => {
        const onAddSpy = jest.fn();

    render(
        <NotepadForm
            notepadColors={notepadColors}
            onAdd={onAddSpy}
        />
    );

    await fillInTitle();
    await fillInDescription();
    await fillInDate();
    await selectColor();
    await handleAdd();

    expect(onAddSpy).toHaveBeenCalledWith({
        title,
        description,
        date,
        color: 'Белый'
    });
    });
});