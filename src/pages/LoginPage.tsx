import React, { useState } from 'react';
import { Button } from '../components/Button';

export function LoginPage({ onSwitch, onLoginSuccess }: { onSwitch: () => void, onLoginSuccess: () => void }) {
  const [identifier, setIdentifier] = useState(''); // Email or Phone
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md border-2 border-black">
        <h2 className="text-3xl font-black uppercase mb-8">Login</h2>
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLoginSuccess(); }}>
          <div>
            <label className="text-xs font-black uppercase mb-2 block">Email or Phone</label>
            <input className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:border-black outline-none" onChange={e => setIdentifier(e.target.value)} />
          </div>
          <div>
            <label className="text-xs font-black uppercase mb-2 block">Password</label>
            <input type="password" className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:border-black outline-none" onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="text-right">
            <button className="text-xs font-bold text-gray-400 hover:text-black">Forgot Password?</button>
          </div>
          <Button className="w-full bg-black text-white py-4 rounded-xl font-black uppercase">Login</Button>
        </form>
        <button onClick={onSwitch} className="w-full text-center text-sm font-bold text-gray-500 mt-8 hover:text-black">New user? Create Account</button>
      </div>
    </div>
  );
}