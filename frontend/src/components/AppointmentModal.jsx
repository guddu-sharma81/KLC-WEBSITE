import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Phone, Mail, Stethoscope, Clock, CheckCircle2 } from 'lucide-react';
import { SPECIALTIES, DOCTORS } from '../data/hospitalData';

export default function AppointmentModal({ isOpen, onClose, initialData }) {
  const [department, setDepartment] = useState('Cardiology & Cardiac Surgery');
  const [doctor, setDoctor] = useState('Dr. Rajesh K. Varma');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [slot, setSlot] = useState('10:30 AM');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketData, setTicketData] = useState(null);

  useEffect(() => {
    if (initialData) {
      if (initialData.department) setDepartment(initialData.department);
      if (initialData.doctor) setDoctor(initialData.doctor);
      if (initialData.date) setDate(initialData.date);
      if (initialData.timeSlot) setSlot(initialData.timeSlot);
      if (initialData.notes) setNotes(initialData.notes);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const refId = `KLC-OPD-${Math.floor(10000 + Math.random() * 90000)}`;
    const roomNo = `Suite ${Math.floor(200 + Math.random() * 200)}, Tower ${['A', 'B', 'C'][Math.floor(Math.random() * 3)]}`;

    setTicketData({
      refId,
      patientName: patientName || 'Patient',
      patientPhone: patientPhone || '+91 98765 43210',
      department,
      doctor,
      date,
      slot,
      roomNo
    });
    setIsSuccess(true);
  };

  const resetForm = () => {
    setIsSuccess(false);
    setTicketData(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 bg-[#001614]/85 backdrop-blur-sm flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-hidden shadow-2xl border-2 border-[#d4af37]/45 flex flex-col"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#001f1c] to-[#003b35] text-white px-7 py-5 flex items-center justify-between border-b border-[#d4af37]/35">
              <h3 className="text-xl font-bold text-white tracking-tight">
                {isSuccess ? 'Appointment Confirmed!' : 'Book Doctor Consultation'}
              </h3>
              <button 
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                onClick={resetForm}
              >
                <X size={22} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Department */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Department
                      </label>
                      <div className="flex items-center gap-2 bg-[#f6faf9] border border-slate-200 rounded-xl px-3.5 py-2.5 focus-within:border-[#008277] focus-within:ring-2 focus-within:ring-[#008277]/15">
                        <Stethoscope size={18} className="text-[#008277] shrink-0" />
                        <select 
                          value={department} 
                          onChange={(e) => setDepartment(e.target.value)}
                          className="w-full bg-transparent text-sm font-semibold text-[#002e29] outline-none cursor-pointer"
                          required
                        >
                          {SPECIALTIES.map((s) => (
                            <option key={s.id} value={s.title}>{s.title}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Doctor */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Doctor / Specialist
                      </label>
                      <div className="flex items-center gap-2 bg-[#f6faf9] border border-slate-200 rounded-xl px-3.5 py-2.5 focus-within:border-[#008277] focus-within:ring-2 focus-within:ring-[#008277]/15">
                        <User size={18} className="text-[#008277] shrink-0" />
                        <select 
                          value={doctor} 
                          onChange={(e) => setDoctor(e.target.value)}
                          className="w-full bg-transparent text-sm font-semibold text-[#002e29] outline-none cursor-pointer"
                          required
                        >
                          {DOCTORS.map((d) => (
                            <option key={d.id} value={d.name}>{d.name} ({d.speciality})</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Date */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Appointment Date
                      </label>
                      <div className="flex items-center gap-2 bg-[#f6faf9] border border-slate-200 rounded-xl px-3.5 py-2.5 focus-within:border-[#008277] focus-within:ring-2 focus-within:ring-[#008277]/15">
                        <Calendar size={18} className="text-[#008277] shrink-0" />
                        <input 
                          type="date" 
                          value={date}
                          min={new Date().toISOString().split('T')[0]}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full bg-transparent text-sm font-semibold text-[#002e29] outline-none"
                          required
                        />
                      </div>
                    </div>

                    {/* Slot */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Preferred Time Slot
                      </label>
                      <div className="flex items-center gap-2 bg-[#f6faf9] border border-slate-200 rounded-xl px-3.5 py-2.5 focus-within:border-[#008277] focus-within:ring-2 focus-within:ring-[#008277]/15">
                        <Clock size={18} className="text-[#008277] shrink-0" />
                        <select 
                          value={slot} 
                          onChange={(e) => setSlot(e.target.value)}
                          className="w-full bg-transparent text-sm font-semibold text-[#002e29] outline-none cursor-pointer"
                        >
                          <option value="10:00 AM - 11:30 AM">10:00 AM - 11:30 AM</option>
                          <option value="11:30 AM - 01:00 PM">11:30 AM - 01:00 PM</option>
                          <option value="02:30 PM - 04:00 PM">02:30 PM - 04:00 PM</option>
                          <option value="04:30 PM - 06:30 PM">04:30 PM - 06:30 PM</option>
                        </select>
                      </div>
                    </div>

                    {/* Patient Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Patient Full Name
                      </label>
                      <div className="flex items-center gap-2 bg-[#f6faf9] border border-slate-200 rounded-xl px-3.5 py-2.5 focus-within:border-[#008277] focus-within:ring-2 focus-within:ring-[#008277]/15">
                        <User size={18} className="text-[#008277] shrink-0" />
                        <input 
                          type="text" 
                          placeholder="e.g. Ramesh Kumar" 
                          value={patientName}
                          onChange={(e) => setPatientName(e.target.value)}
                          className="w-full bg-transparent text-sm font-semibold text-[#002e29] outline-none"
                          required
                        />
                      </div>
                    </div>

                    {/* Contact Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Mobile Number (For SMS & Pass)
                      </label>
                      <div className="flex items-center gap-2 bg-[#f6faf9] border border-slate-200 rounded-xl px-3.5 py-2.5 focus-within:border-[#008277] focus-within:ring-2 focus-within:ring-[#008277]/15">
                        <Phone size={18} className="text-[#008277] shrink-0" />
                        <input 
                          type="tel" 
                          placeholder="+91 98765 00000" 
                          value={patientPhone}
                          onChange={(e) => setPatientPhone(e.target.value)}
                          className="w-full bg-transparent text-sm font-semibold text-[#002e29] outline-none"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Email Address (Optional)
                    </label>
                    <div className="flex items-center gap-2 bg-[#f6faf9] border border-slate-200 rounded-xl px-3.5 py-2.5 focus-within:border-[#008277] focus-within:ring-2 focus-within:ring-[#008277]/15">
                      <Mail size={18} className="text-[#008277] shrink-0" />
                      <input 
                        type="email" 
                        placeholder="patient@example.com" 
                        value={patientEmail}
                        onChange={(e) => setPatientEmail(e.target.value)}
                        className="w-full bg-transparent text-sm font-semibold text-[#002e29] outline-none"
                      />
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <motion.button 
                    type="submit" 
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#005a52] to-[#008277] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all cursor-pointer mt-2 border border-[#d4af37]/40"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Confirm & Generate Digital OPD Pass</span>
                  </motion.button>
                </form>
              ) : (
                <motion.div 
                  className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-dashed border-[#008277] rounded-2xl p-6 sm:p-8 text-center"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                >
                  <CheckCircle2 size={56} className="text-[#008277] mx-auto mb-3" />
                  <h4 className="text-2xl font-extrabold text-[#003833] mb-1">
                    OPD Appointment Confirmed!
                  </h4>
                  <p className="text-sm text-emerald-800 mb-4">
                    Your appointment slip has been sent via SMS to <strong>{ticketData.patientPhone}</strong>.
                  </p>

                  <div className="inline-block bg-[#008277] text-white text-sm font-extrabold px-5 py-1.5 rounded-full border border-[#d4af37] mb-6 shadow-sm">
                    Pass ID: {ticketData.refId}
                  </div>

                  <div className="bg-white rounded-xl p-5 text-left border border-teal-100 shadow-sm space-y-2 text-sm text-slate-700 mb-6">
                    <div><strong>Patient Name:</strong> {ticketData.patientName}</div>
                    <div><strong>Consultant:</strong> {ticketData.doctor}</div>
                    <div><strong>Department:</strong> {ticketData.department}</div>
                    <div><strong>Date & Time:</strong> {ticketData.date} ({ticketData.slot})</div>
                    <div><strong>Location:</strong> {ticketData.roomNo}, KLC Main Hospital Block</div>
                  </div>

                  <div className="flex gap-3 justify-center">
                    <motion.button 
                      className="px-6 py-3 rounded-xl bg-[#008277] text-white font-bold text-sm shadow-md hover:bg-[#006e65] transition-all cursor-pointer border border-[#d4af37]/30" 
                      onClick={() => alert(`Appointment #${ticketData.refId} slip downloaded successfully!`)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Download E-Pass
                    </motion.button>
                    <motion.button 
                      className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-all cursor-pointer" 
                      onClick={resetForm}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Done
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
