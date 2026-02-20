import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, Phone, User, ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';

export function SignupPage({ onSwitch, onSignupSuccess }: { onSwitch: () => void, onSignupSuccess: () => void }) {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', password: '', confirmPassword: '' });
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const checkStrength = (pass: string) => {
    if (pass.length === 0) return "";
    const strong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    const medium = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
    if (strong.test(pass)) return "Strong";
    if (medium.test(pass)) return "Medium";
    return "Weak";
  };

  const validate = () => {
    let newErrors: Record<string, string> = {};
    if (formData.name.length < 3) newErrors.name = "Name must be at least 3 characters.";
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Enter a valid 10-digit phone number.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format.";
    if (checkStrength(formData.password) !== "Strong") newErrors.password = "Password does not meet security rules.";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md border-2 border-black">
        <h2 className="text-3xl font-black uppercase mb-2">Create Account</h2>
        <p className="text-gray-500 mb-8 font-medium italic">Join  J#₹ to track your dream journey.</p>
        
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); if(validate()) onSignupSuccess(); }}>
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={18} />
            <input className="w-full pl-10 pr-4 py-3 border-2 border-gray-100 rounded-xl focus:border-black outline-none" placeholder="Full Name" onChange={e => setFormData({...formData, name: e.target.value})} />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
            <input className="w-full pl-10 pr-4 py-3 border-2 border-gray-100 rounded-xl focus:border-black outline-none" placeholder="Phone Number" onChange={e => setFormData({...formData, phone: e.target.value})} />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
            <input className="w-full pl-10 pr-4 py-3 border-2 border-gray-100 rounded-xl focus:border-black outline-none" placeholder="Email ID" onChange={e => setFormData({...formData, email: e.target.value})} />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
            <input type={showPass ? "text" : "password"} className="w-full pl-10 pr-12 py-3 border-2 border-gray-100 rounded-xl focus:border-black outline-none" placeholder="Password" onChange={e => setFormData({...formData, password: e.target.value})} />
            <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-3 text-gray-400">
              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
            <div className="mt-2 flex gap-1">
              <div className={`h-1 flex-1 rounded ${formData.password ? (checkStrength(formData.password) === 'Weak' ? 'bg-red-400' : 'bg-gray-200') : 'bg-gray-100'}`} />
              <div className={`h-1 flex-1 rounded ${checkStrength(formData.password) === 'Medium' || checkStrength(formData.password) === 'Strong' ? 'bg-orange-400' : 'bg-gray-100'}`} />
              <div className={`h-1 flex-1 rounded ${checkStrength(formData.password) === 'Strong' ? 'bg-green-500' : 'bg-gray-100'}`} />
            </div>
            <p className="text-[10px] uppercase font-bold text-gray-400 mt-1">Strength: {checkStrength(formData.password)}</p>
          </div>

          <Button className="w-full bg-black text-white py-4 rounded-xl font-black uppercase mt-4">Create Account</Button>
        </form>
        <button onClick={onSwitch} className="w-full text-center text-sm font-bold text-gray-500 mt-6 hover:text-black transition-colors">Already have an account? Login</button>
      </div>
    </div>
  );
}