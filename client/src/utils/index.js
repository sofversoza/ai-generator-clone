// different functions to use across the whole app

import FileSaver from "file-saver"

import { surpriseMePrompts } from "../constants"

export function getRandomPrompt(prompt) {
	const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
	const randomPrompt = surpriseMePrompts[randomIndex]

	// make sure we dont get the same random prompt 2-3x in a row
	if (randomPrompt === prompt) return getRandomPrompt(prompt)

	return randomPrompt
}

export async function downloadImage(_id, photo) {
	FileSaver.saveAs(photo, `download-${_id}.jpg`)
}
