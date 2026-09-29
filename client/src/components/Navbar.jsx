import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="border-b border-white/10 bg-linear-to-r from-slate-950 via-blue-950 to-slate-950">

            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                <Link
                    to="/"
                    className="text-2xl font-bold tracking-wide text-white"
                >
                    RPKL
                </Link>

                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-2xl text-white"
                >
                    ☰
                </button>

                <nav className={`${isOpen ? "block" : "hidden"} md:block`}>
                    <ul className="flex items-center gap-8">

                        <li>
                            <Link
                                to="/"
                                className="text-slate-200 transition hover:text-sky-400"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/about"
                                className="text-slate-200 transition hover:text-sky-400"
                            >
                                About
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/divisions"
                                className="text-slate-200 transition hover:text-sky-400"
                            >
                                Divisions
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/login"
                                className="rounded-full bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
                            >
                                Login
                            </Link>
                        </li>

                    </ul>
                </nav>

            </div>
        </header>
    );
}

export default Navbar;