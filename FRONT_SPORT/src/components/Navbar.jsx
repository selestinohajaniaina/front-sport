import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../assets/logo.svg'

const navigation = [


    { name: 'A propos', href: '#about', current: false },
    { name: 'Nos offres', href: '#offre', current: false },
    { name: 'Nos services', href: '#services', current: false },
    { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-black bg-opacity-25 z-10 fixed w-full top-0">
        {({ open }) => (
            <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 z-10 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                    </Disclosure.Button>
                </div>
                <div className="flex relative max-sm:w-full max-sm:justify-center w-full items-center sm:justify-between sm:items-stretch">
                    <div className="flex flex-shrink-0 items-center">
                        <Link to='/' className='text-[#E0F4FF] bg-cyan-500 rounded-md px-3 py-2 font-semibold'>
                            Acceuil
                        </Link>
                    </div>
                    <div className="hidden sm:block">
                    <div className="flex space-x-4">
                        {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className='text-gray-300 hover:bg-cyan-500 hover:text-white rounded-md px-3 py-2 text-sm font-semibold'
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </a>
                        ))}
                    </div>
                    </div>
                    <div className='max-sm:absolute max-sm:inset-y-0 max-sm:right-0 max-sm:flex max-sm:items-center flex flex-shrink-0 items-center'>
                        <Link to='/' className='text-xl text-[#E0F4FF] font-semibold'>
                            <img src={Logo} alt='logo' className='w-12 h-12' />
                        </Link>
                    </div>
                </div>
                </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                    <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                        item.current ? 'bg-cyan-500 text-[#E0F4FF]' : 'text-[#E0F4FF] hover:bg-cyan-500 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                    >
                    {item.name}
                    </Disclosure.Button>
                ))}
                </div>
            </Disclosure.Panel>
            </>
        )}
        </Disclosure>
    )
}