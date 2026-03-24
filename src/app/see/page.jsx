'use client';

import React, { useEffect, useState } from 'react';
import ScrollToTop from '@/components/ui/ScrollToTop';
import SeeAppointments from '@/components/common/SeeAppointments';

const ADMIN_USERNAME = 'admin@ksdentalclinics.com';
const ADMIN_PASSWORD = 'Admin@123';
const SEE_AUTH_KEY = 'see_admin_authenticated';

export default function SeeAppointmentsPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const savedAuth = window.sessionStorage.getItem(SEE_AUTH_KEY);
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      window.sessionStorage.setItem(SEE_AUTH_KEY, 'true');
      setIsAuthenticated(true);
      setError('');
      setPassword('');
      return;
    }

    setError('Invalid username or password.');
  };

  const handleLogout = () => {
    window.sessionStorage.removeItem(SEE_AUTH_KEY);
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    setError('');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white">
        <ScrollToTop />

        <section className="bg-gray-900 text-white py-12 md:py-16 lg:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <p className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Admin Access</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 md:mb-6 leading-tight">
                Login to Continue
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Sign in to access appointment management.
              </p>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10" />
          <div className="absolute top-32 right-32 w-32 h-32 bg-white opacity-5" />
          <div className="absolute top-64 right-0 w-32 h-32 bg-white opacity-20" />
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="max-w-xl mx-auto px-4">
            <form
              onSubmit={handleLogin}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-5"
            >
              <div>
                <label htmlFor="see-username" className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <input
                  id="see-username"
                  type="email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E63D5] focus:border-transparent"
                  autoComplete="username"
                  required
                />
              </div>

              <div>
                <label htmlFor="see-password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  id="see-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E63D5] focus:border-transparent"
                  autoComplete="current-password"
                  required
                />
              </div>

              {error ? <p className="text-red-600 text-sm">{error}</p> : null}

              <button
                type="submit"
                className="w-full px-4 py-3 rounded-lg bg-[#1E63D5] text-white font-medium hover:bg-[#174eb3] transition-colors"
              >
                Login
              </button>
            </form>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      <section className="bg-gray-900 text-white py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Appointments</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 md:mb-6 leading-tight">
              See & Manage Slots
            </h1>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Public dashboard to view all booked slots by date and quickly update or delete appointments.
            </p>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10" />
        <div className="absolute top-32 right-32 w-32 h-32 bg-white opacity-5" />
        <div className="absolute top-64 right-0 w-32 h-32 bg-white opacity-20" />
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-6 flex justify-end">
            <button
              type="button"
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            >
              Logout
            </button>
          </div>
          <SeeAppointments />
        </div>
      </section>
    </div>
  );
}