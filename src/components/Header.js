import { useEffect } from 'react';
import "./Header.css";

export default function Header() {

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }
  return (
    <>
      <header id="header" className="fixed-top ">
        <div className="container-fluid">

          <div className="row justify-content-center">
            <div className="col-xl-9 d-flex align-items-center justify-content-lg-between">
              <a href="index.html" class="logo me-auto me-lg-0"></a>
              <h1 className="logo me-auto me-lg-0"><a href="index.html">Los Pasos de la Memoria</a></h1>


              <nav id="navbar" class="navbar order-last order-lg-0">
                <ul>
                  <li><a className="nav-link scrollto active" href="#hero">Inicio</a></li>
                  <li><a className="nav-link scrollto" href="#about">Introducción</a></li>
                  <li><a className="nav-link scrollto" href="#cta">Realidad Virtual</a></li>
                  <li><a className="nav-link scrollto " href="#portfolio">Galería</a></li>
                  <li><a className="nav-link scrollto" href="#faq">Feedback</a></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
              </nav>
            </div>
          </div>

        </div>
      </header>
      <hr />
    </>
  );
}