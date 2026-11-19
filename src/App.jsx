import { useState } from 'react'
import './App.css'
import * as Pages from "./pages"

function App() {
  return (
    <>
    <Pages.HomePage />
    <Pages.ShowsPage />
    <Pages.ShowPage />
    <Pages.SearchPage />
    <Pages.NotFoundPage />
    </>
  )
}