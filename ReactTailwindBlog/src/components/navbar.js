import { Disclosure } from '@headlessui/react'
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect,useRef, useState } from 'react';
import GithubIcon from '../assets/icons/githubIcon.js';
import LinkedinIcon from '../assets/icons/linkedinIcon.js';
import { Link } from 'react-router-dom';

const navigation = [
  { id: 0, name: 'Home', href: '/' },
  { id: 1, name: 'Projects', href: 'projects' },
  { id: 2, name: 'Tags', href: 'tags' },
  { id: 3, name: 'About', href: 'about' }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isDark, setDark] = useState(false);
  const moonIcon = useRef(null);
  const sunIcon = useRef(null); 

  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;

  const iconToggle = () => {
    moonIcon.current.classList.toggle("display-none");
    sunIcon.current.classList.toggle("display-none");
  }
  
  const themeCheck = () =>{
    if(userTheme === "dark" || (!userTheme && systemTheme))
    {
      document.documentElement.classList.add("dark");
      moonIcon.current.classList.add("display-none");
      setDark(true);
      return;
    }
    sunIcon.current.classList.add("display-none");
    setDark(false);
  }
  const themeSwitch = () => {
    if(document.documentElement.classList.contains("dark")){
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme","light");
      setDark(false);
      iconToggle();
      return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme","dark");
    setDark(true);
    iconToggle();
  }

  useEffect(() => {
    themeCheck();
  }, []);

  return (
    <Disclosure as="nav" className="bg-white dark:bg-gray-800 border-b border-b-gray-200 dark:border-b-gray-700">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-2xl px-4 lg:px-2 sm:px-0 md:px-0">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                      onClick={() => {setCurrentPage(item.id)}}
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.id == currentPage ? 'bg-gray-900 text-white dark:text-gray-900 dark:bg-white' : 'text-gray-700 dark:text-white hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-6 md:pr-6 lg:pr-6 gap-x-2">
              <a className='hover:opacity-70' href='https://github.com' target='_blank' alt="github"><GithubIcon fillColor={isDark ? "#fff": "#111827"} /></a>
              <a className='hover:opacity-70' href='https://linkedin.com/in/frknua' target='_blank' alt="linkedin"><LinkedinIcon fillColor={isDark ? "#fff": "#111827"} /></a>
              
              <MoonIcon onClick={themeSwitch} ref={moonIcon} className="moonIcon h-7 w-7 relative rounded-full p-1 text-gray-600 cursor-pointer hover:text-gray-950" aria-hidden="true" />
              <SunIcon onClick={themeSwitch} ref={sunIcon} className="sunIcon h-7 w-7 relative rounded-full p-1 text-gray-200 cursor-pointer hover:text-white" aria-hidden="true" />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                key={item.name}
                to={item.href}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
