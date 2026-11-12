import { useState, useEffect, useRef } from 'react';
import './Home.css';
import {
  Home as HomeIcon,
  Presentation,
  ShieldCheck,
  Users,
  CalendarCheck,
  SlidersHorizontal,
  FileQuestion,
  Bell,
  Sparkles,
  Settings,
  Search,
  Send,
  Zap,
  MapPin,
  Building2,
  Calendar,
  ArrowRight,
  Eye,
  CheckCircle2,
  User,
  UserPlus,
  BookOpen,
  UserCog,
  Megaphone,
  BarChart3,
  CalendarClock,
  FileCheck,
  GraduationCap,
  ChevronRight,
  ChevronDown,
  MessageSquare,
  Landmark,
  Star,
  FileText,
  LogOut,
  Menu,
  X
} from 'lucide-react';

// Images imported from assets (Only essential active images)
import buildingImg from '../assets/images/building.png';
import bannerPanoramaImg from '../assets/images/banner_building_panorama_clean.jpg';
import instituteThumbImg from '../assets/images/institute_upscaled.png';
import educationAiCapImg from '../assets/images/education_ai_cap.png';
import navbarCapImg from '../assets/images/navbar_cap_cropped.png';

// ============================================================================
// QUICK ACTION ICONS (Inlined from QuickActionIcons.jsx)
// ============================================================================
const QuickRocketIcon = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
  >
    {/* Outer Orange Flame */}
    <path
      d="M4.2 19.8C3.3 20.7 2.2 21.6 2 22C2.4 21.8 3.3 20.7 4.2 19.8C5.2 18.8 6.5 17.5 5.5 16.5C4.5 15.5 3.2 16.8 4.2 17.8L3 21L6.2 19.8Z"
      fill="#f97316"
    />
    <path
      d="M3.5 20.5C4.5 19.5 5.8 17.5 4.8 16.5C3.8 15.5 1.8 16.8 2.8 17.8L2 22L6.2 21.2C7.2 22.2 8.5 20.2 7.5 19.2C6.5 18.2 4.5 19.5 3.5 20.5Z"
      fill="#f97316"
      opacity="0.9"
    />
    {/* Inner Yellow Flame */}
    <path
      d="M4.5 19.5C5.2 18.8 6 17.8 5.3 17.1C4.6 16.4 3.6 17.2 4.3 17.9L3.8 20.2L6.1 19.7C6.8 20.4 7.6 19.4 6.9 18.7C6.2 18 5.2 18.8 4.5 19.5Z"
      fill="#fbbf24"
    />
    {/* Lower Fin */}
    <path
      d="M8.8 18.2L5.8 19.2C5.2 19.4 4.6 18.8 4.8 18.2L5.8 15.2C6.2 14.2 7 14.6 7.6 15.2L8.8 16.4C9.4 17 9.8 17.8 8.8 18.2Z"
      fill="#1d4ed8"
    />
    {/* Upper Fin */}
    <path
      d="M18.2 8.8L19.2 5.8C19.4 5.2 18.8 4.6 18.2 4.8L15.2 5.8C14.2 6.2 14.6 7 15.2 7.6L16.4 8.8C17 9.4 17.8 9.8 18.2 8.8Z"
      fill="#1d4ed8"
    />
    {/* Fuselage / Rocket Body */}
    <path
      d="M9 15C8 13.8 8.2 11.5 10 9.5C12 7.5 15.5 5 21 3C19 8.5 16.5 12 14.5 14C12.5 15.8 10.2 16 9 15Z"
      fill="#2563eb"
    />
    {/* Cockpit Window */}
    <circle cx="14.8" cy="9.2" r="1.8" fill="#ffffff" />
    <circle cx="14.8" cy="9.2" r="1" fill="#93c5fd" />
  </svg>
);

const ViewStudentsIcon = ({ size = 26, color = '#2563eb', className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', flexShrink: 0 }}
  >
    {/* Primary Student (Foreground Left) */}
    <circle cx="8.5" cy="6.5" r="3.5" fill={color} />
    <path
      d="M1.5 18C1.5 14.7 4.6 12 8.5 12C12.4 12 15.5 14.7 15.5 18C15.5 18.8 14.8 19.5 14 19.5H3C2.2 19.5 1.5 18.8 1.5 18Z"
      fill={color}
    />
    {/* Secondary Student (Background Right) */}
    <circle cx="17" cy="8" r="2.8" fill={color} />
    <path
      d="M15.2 13.3C16.8 13.9 18.5 15 19.2 16.6C19.8 17.8 19.8 19 19 19.5H16.2C16.8 18.6 17 17.6 16.8 16.5C16.5 15.2 15.8 14.1 14.8 13.2C15 13.2 15.1 13.2 15.2 13.3Z"
      fill={color}
    />
  </svg>
);

const ManageFacultyIcon = ({ size = 26, color = '#2563eb', className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', flexShrink: 0 }}
  >
    {/* Faculty Head */}
    <circle cx="9" cy="6.5" r="3.5" fill={color} />
    {/* Faculty Body */}
    <path
      d="M2 18C2 14.7 5.1 12 9 12C10.7 12 12.3 12.5 13.5 13.4C12.6 14.4 12 15.8 12 17.2C12 18.1 12.2 18.9 12.6 19.5H3.5C2.7 19.5 2 18.8 2 18Z"
      fill={color}
    />
    {/* Gear / Cog */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 13.5C17.7 13.5 17.5 13.7 17.4 13.9L17.1 14.7C16.8 14.8 16.5 15 16.3 15.2L15.5 14.9C15.3 14.8 15 14.9 14.9 15.1L14.1 16.5C14 16.7 14 17 14.2 17.2L14.9 17.7C14.9 17.9 14.9 18.1 14.9 18.3L14.2 18.8C14 19 14 19.3 14.1 19.5L14.9 20.9C15 21.1 15.3 21.2 15.5 21.1L16.3 20.8C16.5 21 16.8 21.2 17.1 21.3L17.4 22.1C17.5 22.3 17.7 22.5 18 22.5H19.6C19.8 22.5 20.1 22.3 20.1 22.1L20.4 21.3C20.7 21.2 21 21 21.2 20.8L22 21.1C22.2 21.2 22.5 21.1 22.6 20.9L23.4 19.5C23.5 19.3 23.5 19 23.3 18.8L22.6 18.3C22.6 18.1 22.6 17.9 22.6 17.7L23.3 17.2C23.5 17 23.5 16.7 23.4 16.5L22.6 15.1C22.5 14.9 22.2 14.8 22 14.9L21.2 15.2C21 15 20.7 14.8 20.4 14.7L20.1 13.9C20.1 13.7 19.8 13.5 19.6 13.5H18ZM18.8 19.5C18 19.5 17.3 18.8 17.3 18C17.3 17.2 18 16.5 18.8 16.5C19.6 16.5 20.3 17.2 20.3 18C20.3 18.8 19.6 19.5 18.8 19.5Z"
      fill={color}
    />
  </svg>
);

const CreateNoticeIcon = ({ size = 26, color = '#2563eb', className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', flexShrink: 0 }}
  >
    {/* Main Megaphone Cone */}
    <path
      d="M3 13.5V10.5C3 9.4 3.9 8.5 5 8.5H6.5L14.2 4.3C14.9 3.9 15.8 4.4 15.8 5.2V18.8C15.8 19.6 14.9 20.1 14.2 19.7L6.5 15.5H5C3.9 15.5 3 14.6 3 13.5Z"
      fill={color}
    />
    {/* Handle */}
    <path
      d="M7 15.5V18.5C7 19.6 7.9 20.5 9 20.5C10.1 20.5 11 19.6 11 18.5V17.9L7 15.5Z"
      fill={color}
    />
    {/* Sound Wave 1 (Inner Arc) */}
    <path
      d="M18 9C18.8 10 19.3 11.2 19.3 12.5C19.3 13.8 18.8 15 18 16"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* Sound Wave 2 (Outer Arc) */}
    <path
      d="M20.5 6.5C21.8 8.2 22.5 10.3 22.5 12.5C22.5 14.7 21.8 16.8 20.5 18.5"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

const TrackAttendanceIcon = ({ size = 26, color = '#2563eb', className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', flexShrink: 0 }}
  >
    {/* Calendar Body */}
    <rect x="2.5" y="4" width="19" height="17" rx="3.5" fill={color} />
    {/* Top Binder Pegs / Rings */}
    <rect x="6.5" y="1.5" width="2" height="4.5" rx="1" fill={color} />
    <rect x="15.5" y="1.5" width="2" height="4.5" rx="1" fill={color} />
    {/* White Checkmark */}
    <path
      d="M7.5 12.8L10.5 15.8L16.8 9.5"
      stroke="#ffffff"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ViewReportsIcon = ({ size = 26, color = '#2563eb', className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', flexShrink: 0 }}
  >
    {/* Left Bar (Short) */}
    <rect x="3.5" y="13" width="4.5" height="8.5" rx="2.25" fill={color} />
    {/* Center Bar (Tallest) */}
    <rect x="10" y="4.5" width="4.5" height="17" rx="2.25" fill={color} />
    {/* Right Bar (Medium) */}
    <rect x="16.5" y="9" width="4.5" height="12.5" rx="2.25" fill={color} />
  </svg>
);

const ManageExamsIcon = ({ size = 26, color = '#2563eb', className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', flexShrink: 0 }}
  >
    {/* Main Document Body with folded top-right corner */}
    <path
      d="M4.5 4.5C4.5 3.4 5.4 2.5 6.5 2.5H13.5L19.5 8.5V19.5C19.5 20.6 18.6 21.5 17.5 21.5H6.5C5.4 21.5 4.5 20.6 4.5 19.5V4.5Z"
      fill={color}
    />
    {/* Folded Corner Tab */}
    <path
      d="M13.5 2.5V7C13.5 7.8 14.2 8.5 15 8.5H19.5L13.5 2.5Z"
      fill="#1d4ed8"
      opacity="0.3"
    />
    {/* White Text Line 1 */}
    <rect x="7.5" y="11" width="9" height="1.8" rx="0.9" fill="#ffffff" />
    {/* White Text Line 2 */}
    <rect x="7.5" y="14.5" width="9" height="1.8" rx="0.9" fill="#ffffff" />
    {/* White Text Line 3 */}
    <rect x="7.5" y="18" width="5.5" height="1.8" rx="0.9" fill="#ffffff" />
  </svg>
);

// ============================================================================
// SOLID ACTIVITY ICONS (Inlined from ActivityIcons.jsx)
// ============================================================================
const AcademicChartHeaderIcon = ({ size = 18, color = '#2563eb', className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
  >
    <rect x="3" y="10" width="4" height="11" rx="2" fill={color} />
    <rect x="9.5" y="4" width="4" height="17" rx="2" fill={color} />
    <rect x="16" y="8" width="4" height="13" rx="2" fill={color} />
  </svg>
);

const SolidLandmarkIcon = ({ size = 18, color = '#2563eb', className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
  >
    {/* Triangular Pediment / Roof */}
    <path d="M12 2L2 7V8.5H22V7L12 2Z" fill={color} />
    {/* Architrave / Top bar */}
    <rect x="2" y="9" width="20" height="1.8" rx="0.5" fill={color} />
    {/* 4 Classical Pillars */}
    <rect x="3.8" y="11.2" width="2.6" height="7.2" rx="0.6" fill={color} />
    <rect x="8.8" y="11.2" width="2.6" height="7.2" rx="0.6" fill={color} />
    <rect x="13.8" y="11.2" width="2.6" height="7.2" rx="0.6" fill={color} />
    <rect x="18.8" y="11.2" width="2.6" height="7.2" rx="0.6" fill={color} />
    {/* Base / Stylobate Steps */}
    <rect x="2" y="18.8" width="20" height="1.8" rx="0.5" fill={color} />
    <rect x="1" y="21" width="22" height="1.8" rx="0.6" fill={color} />
  </svg>
);

const SolidLightningIcon = ({ size = 18, color = '#f59e0b', className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
  >
    <path
      d="M13.5 2L4 13.5H12L10.5 22L20 10.5H12L13.5 2Z"
      fill={color}
    />
  </svg>
);

const SolidUserPlusIcon = ({ size = 17, color = '#2563eb', className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
  >
    {/* Student Head */}
    <circle cx="8.5" cy="7" r="3.5" fill={color} />
    {/* Student Bust */}
    <path
      d="M1.5 18.5C1.5 15.2 4.6 12.5 8.5 12.5C12.4 12.5 15.5 15.2 15.5 18.5C15.5 19.3 14.8 20 14 20H3C2.2 20 1.5 19.3 1.5 18.5Z"
      fill={color}
    />
    {/* Plus sign on top-right */}
    <path
      d="M19 6V12M16 9H22"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SolidCalendarCheckIcon = ({ size = 17, color = '#f59e0b', className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
  >
    {/* Calendar Body */}
    <rect x="2.5" y="4.5" width="19" height="16.5" rx="3.5" fill={color} />
    {/* Top Binder Pegs */}
    <rect x="6.5" y="2" width="2" height="4.5" rx="1" fill={color} />
    <rect x="15.5" y="2" width="2" height="4.5" rx="1" fill={color} />
    {/* White Checkmark */}
    <path
      d="M7.5 13L10.5 16L16.5 9.8"
      stroke="#ffffff"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SolidExamDocIcon = ({ size = 17, color = '#2563eb', className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
  >
    {/* Document Body with folded top-right corner */}
    <path
      d="M4.5 4.5C4.5 3.4 5.4 2.5 6.5 2.5H13.5L19.5 8.5V19.5C19.5 20.6 18.6 21.5 17.5 21.5H6.5C5.4 21.5 4.5 20.6 4.5 19.5V4.5Z"
      fill={color}
    />
    {/* Folded Corner Tab */}
    <path
      d="M13.5 2.5V7C13.5 7.8 14.2 8.5 15 8.5H19.5L13.5 2.5Z"
      fill="#1d4ed8"
      opacity="0.3"
    />
    {/* White Question / Text Lines */}
    <rect x="7.5" y="11" width="9" height="1.8" rx="0.9" fill="#ffffff" />
    <rect x="7.5" y="14.5" width="9" height="1.8" rx="0.9" fill="#ffffff" />
    <rect x="7.5" y="18" width="5.5" height="1.8" rx="0.9" fill="#ffffff" />
  </svg>
);

const SolidNoticeBellIcon = ({ size = 17, color = '#f59e0b', className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
  >
    {/* Bell Body */}
    <path
      d="M12 3C9.2 3 7 5.2 7 8V12.2C7 13.1 6.6 14 6 14.6L4.8 15.8C4.1 16.5 4.6 17.8 5.6 17.8H18.4C19.4 17.8 19.9 16.5 19.2 15.8L18 14.6C17.4 14 17 13.1 17 12.2V8C17 5.2 14.8 3 12 3Z"
      fill={color}
    />
    {/* Clapper at bottom */}
    <path
      d="M10 19C10.3 20.1 11.1 20.8 12 20.8C12.9 20.8 13.7 20.1 14 19H10Z"
      fill={color}
    />
    {/* Top Ring / Loop */}
    <path
      d="M12 1.5C11.2 1.5 10.5 2.2 10.5 3H13.5C13.5 2.2 12.8 1.5 12 1.5Z"
      fill={color}
    />
  </svg>
);

// ============================================================================
// STATS CARDS & SPARKLINES (Inlined from StatsCards.jsx)
// ============================================================================
function Sparkline({ data, color, id }) {
  const width = 105;
  const height = 50;
  const padding = 4;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data.map((value, index) => ({
    x: padding + (index / (data.length - 1)) * (width - padding * 2),
    y: height - padding - ((value - min) / range) * (height - padding * 2),
  }));

  // Create smooth quadratic curves
  let linePath = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;

  for (let i = 1; i < points.length - 1; i++) {
    const current = points[i];
    const next = points[i + 1];

    const midX = (current.x + next.x) / 2;
    const midY = (current.y + next.y) / 2;

    linePath += ` Q ${current.x.toFixed(1)} ${current.y.toFixed(1)} ${midX.toFixed(1)} ${midY.toFixed(1)}`;
  }

  const last = points[points.length - 1];
  linePath += ` L ${last.x.toFixed(1)} ${last.y.toFixed(1)}`;

  const areaPath = `${linePath} L ${last.x.toFixed(1)} ${height} L ${points[0].x.toFixed(1)} ${height} Z`;
  const gradientId = `gradient-${id}`;

  return (
    <svg
      className="sparkline"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Soft gradient fill underneath the curve */}
      <path d={areaPath} fill={`url(#${gradientId})`} />

      {/* Smooth snake-shaped line */}
      <path
        d={linePath}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Final circular endpoint dot */}
      <circle cx={last.x} cy={last.y} r="3.8" fill={color} />
    </svg>
  );
}

const StudentGroupIcon = ({ color = '#3267F5', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="5.8" cy="9.5" r="2.6" fill={color} />
    <path
      d="M1.5 18.5C1.5 16 3.5 14.2 6 14.2C7 14.2 7.9 14.5 8.6 15C7.8 15.9 7.2 17.1 7.2 18.5H1.5Z"
      fill={color}
    />
    <circle cx="18.2" cy="9.5" r="2.6" fill={color} />
    <path
      d="M22.5 18.5C22.5 16 20.5 14.2 18 14.2C17 14.2 16.1 14.5 15.4 15C16.2 15.9 16.8 17.1 16.8 18.5H22.5Z"
      fill={color}
    />
    <circle cx="12" cy="7.5" r="3.4" fill={color} />
    <path
      d="M6 18.5C6 15.2 8.7 12.8 12 12.8C15.3 12.8 18 15.2 18 18.5C18 19.2 17.3 19.8 16.5 19.8H7.5C6.7 19.8 6 19.2 6 18.5Z"
      fill={color}
    />
  </svg>
);

const FacultyCapIcon = ({ color = '#8056E8', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.5 13.2V17C6.5 18.8 9 20.2 12 20.2C15 20.2 17.5 18.8 17.5 17V13.2L12 16L6.5 13.2Z"
      fill={color}
    />
    <path
      d="M12 3.5L1.5 8.8L12 14.2L22.5 8.8L12 3.5Z"
      fill={color}
    />
    <path
      d="M8.5 8.8L12 7L15.5 8.8"
      stroke="#ffffff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.5 9.5V15.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="20.5" cy="16" r="1.4" fill={color} />
    <path
      d="M19.2 17.2C19.2 17.2 19 20.5 20.5 20.5C22 20.5 21.8 17.2 21.8 17.2H19.2Z"
      fill={color}
    />
  </svg>
);

const CourseBookIcon = ({ color = '#F5A623', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 6.2C8.8 5.2 5.5 5 2.8 5.5C2.3 5.6 2 6 2 6.5V17.8C2 18.5 2.6 19 3.2 18.9C5.8 18.5 8.8 18.8 11 19.8V6.2Z"
      fill={color}
    />
    <path
      d="M13 6.2C15.2 5.2 18.5 5 21.2 5.5C21.7 5.6 22 6 22 6.5V17.8C22 18.5 21.4 19 20.8 18.9C18.2 18.5 15.2 18.8 13 19.8V6.2Z"
      fill={color}
    />
  </svg>
);

const AttendanceCalendarIcon = ({ color = '#18A66A', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2.5" y="4.5" width="19" height="16.5" rx="3.5" fill={color} />
    <rect x="6.5" y="2" width="2" height="4.5" rx="1" fill={color} />
    <rect x="15.5" y="2" width="2" height="4.5" rx="1" fill={color} />
    <line x1="3" y1="9" x2="21" y2="9" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.4" />
    <path
      d="M7.5 14L10.5 17L16.5 11"
      stroke="#ffffff"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const STATS_DATA = [
  {
    id: 'students',
    title: 'Total Students',
    value: '4,850',
    growth: '+12%',
    color: '#3267F5',
    iconBg: '#EEF4FE',
    icon: StudentGroupIcon,
    data: [24, 18, 38, 26, 54, 40, 72, 56, 98],
  },
  {
    id: 'faculty',
    title: 'Total Faculty',
    value: '180',
    growth: '+5%',
    color: '#8056E8',
    iconBg: '#F3EFFF',
    icon: FacultyCapIcon,
    data: [22, 16, 36, 24, 52, 38, 70, 54, 96],
  },
  {
    id: 'courses',
    title: 'Total Courses',
    value: '72',
    growth: '+2%',
    color: '#F5A623',
    iconBg: '#FEF6E9',
    icon: CourseBookIcon,
    data: [26, 20, 42, 28, 56, 42, 74, 58, 100],
  },
  {
    id: 'attendance',
    title: 'Attendance Rate',
    value: '95.2%',
    growth: '+1.5%',
    color: '#18A66A',
    iconBg: '#E8F8F0',
    icon: AttendanceCalendarIcon,
    data: [20, 15, 36, 22, 52, 38, 70, 54, 95],
  },
];

function StatsCards({ stats = STATS_DATA }) {
  return (
    <div className="stats-container">
      {stats.map((card) => {
        const IconComponent = card.icon;
        return (
          <div key={card.id} className="stat-card">
            {/* Circular icon on the left */}
            <div
              className="stat-icon"
              style={{ backgroundColor: card.iconBg, color: card.color }}
            >
              <IconComponent color={card.color} />
            </div>

            {/* Title, number and growth in the middle */}
            <div className="stat-details">
              <div className="stat-title">{card.title}</div>
              <div className="stat-value">{card.value}</div>
              <div className="stat-growth">
                <span className="growth-arrow">↑</span>
                <span>{card.growth}</span>
              </div>
            </div>

            {/* Compact smooth sparkline graph on the right */}
            <div className="stat-chart">
              <Sparkline data={card.data} color={card.color} id={card.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Custom icon matching the AI Assistant beacon/pin from the reference
const AiBeaconIcon = ({ size = 18, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2a7.5 7.5 0 0 0-7.5 7.5c0 4.8 6.5 10.8 7.1 11.3a.6.6 0 0 0 .8 0c.6-.5 7.1-6.5 7.1-11.3A7.5 7.5 0 0 0 12 2z" />
    <circle cx="12" cy="9.5" r="2.8" />
  </svg>
);

const Home = () => {
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [activeTab, setActiveTab] = useState('This Semester');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredMonthIdx, setHoveredMonthIdx] = useState(2); // Defaults to Oct 17 like reference image
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isMobileSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileSidebarOpen]);

  const navItems = [
    { name: 'Dashboard', icon: HomeIcon },
    { name: 'Academic Overview', icon: Presentation },
    { name: 'Faculty', icon: ShieldCheck },
    { name: 'Students', icon: Users },
    { name: 'Attendance', icon: CalendarCheck },
    { name: 'Results', icon: SlidersHorizontal },
    { name: 'Reports', icon: FileQuestion },
    { name: 'Notice Board', icon: Bell },
    { name: 'AI Assistant', icon: AiBeaconIcon },
    { name: 'Settings', icon: Settings },
  ];

  // Chart data based on selected tab (Mathematically aligned to reference image)
  const chartDatasets = {
    'This Semester': {
      months: [
        { name: 'Aug', fullDate: 'Aug 4', x: 50, blueY: 74, orangeY: 99, overall: '60%', passRate: '42%', students: '650', faculty: '280' },
        { name: 'Sep', fullDate: 'Sep 10', x: 145, blueY: 53, orangeY: 84, overall: '75%', passRate: '53%', students: '720', faculty: '310' },
        { name: 'Oct', fullDate: 'Oct 17', x: 240, blueY: 49, orangeY: 74, overall: '78%', passRate: '60%', students: '800', faculty: '350' },
        { name: 'Nov', fullDate: 'Nov 21', x: 335, blueY: 41, orangeY: 70, overall: '84%', passRate: '63%', students: '860', faculty: '380' },
        { name: 'Dec', fullDate: 'Dec 28', x: 425, blueY: 29, orangeY: 66, overall: '92%', passRate: '88%', students: '920', faculty: '410' }
      ],
      bluePts: [
        { x: 50, y: 74, r: 3.5 },
        { x: 98, y: 66, r: 2.2 },
        { x: 145, y: 53, r: 3.5 },
        { x: 192, y: 49, r: 2.2 },
        { x: 240, y: 49, r: 3.5 },
        { x: 288, y: 51, r: 2.2 },
        { x: 335, y: 41, r: 3.5 },
        { x: 380, y: 36, r: 2.2 },
        { x: 425, y: 29, r: 3.5 }
      ],
      bluePath: 'M 50,74 C 58.0,72.7 82.2,69.5 98,66 C 113.8,62.5 129.3,55.8 145,53 C 160.7,50.2 176.2,49.7 192,49 C 207.8,48.3 224.0,48.7 240,49 C 256.0,49.3 272.2,52.3 288,51 C 303.8,49.7 319.7,43.5 335,41 C 350.3,38.5 365.0,38.0 380,36 C 395.0,34.0 417.5,30.2 425,29',
      blueArea: 'M 50,74 C 58.0,72.7 82.2,69.5 98,66 C 113.8,62.5 129.3,55.8 145,53 C 160.7,50.2 176.2,49.7 192,49 C 207.8,48.3 224.0,48.7 240,49 C 256.0,49.3 272.2,52.3 288,51 C 303.8,49.7 319.7,43.5 335,41 C 350.3,38.5 365.0,38.0 380,36 C 395.0,34.0 417.5,30.2 425,29 L 425,158 L 50,158 Z',
      blueBadge: '92%',
      blueBadgeY: 20,
      orangePts: [
        { x: 50, y: 99, r: 3.5 },
        { x: 98, y: 92, r: 2.2 },
        { x: 145, y: 84, r: 3.5 },
        { x: 240, y: 74, r: 3.5 },
        { x: 335, y: 70, r: 3.5 },
        { x: 425, y: 66, r: 3.5 }
      ],
      orangePath: 'M 50,99 C 58.0,97.8 82.2,94.5 98,92 C 113.8,89.5 121.3,87.0 145,84 C 168.7,81.0 208.3,76.3 240,74 C 271.7,71.7 304.2,71.3 335,70 C 365.8,68.7 410.0,66.7 425,66',
      orangeArea: 'M 50,99 C 58.0,97.8 82.2,94.5 98,92 C 113.8,89.5 121.3,87.0 145,84 C 168.7,81.0 208.3,76.3 240,74 C 271.7,71.7 304.2,71.3 335,70 C 365.8,68.7 410.0,66.7 425,66 L 425,158 L 50,158 Z',
      orangeBadge: '88%',
      orangeBadgeY: 57
    },
    'Last Semester': {
      months: [
        { name: 'Aug', fullDate: 'Aug 4', x: 50, blueY: 81, orangeY: 105, overall: '55%', passRate: '38%', students: '610', faculty: '260' },
        { name: 'Sep', fullDate: 'Sep 10', x: 145, blueY: 60, orangeY: 91, overall: '70%', passRate: '48%', students: '680', faculty: '290' },
        { name: 'Oct', fullDate: 'Oct 17', x: 240, blueY: 54, orangeY: 80, overall: '74%', passRate: '56%', students: '740', faculty: '320' },
        { name: 'Nov', fullDate: 'Nov 21', x: 335, blueY: 47, orangeY: 74, overall: '79%', passRate: '60%', students: '810', faculty: '350' },
        { name: 'Dec', fullDate: 'Dec 28', x: 425, blueY: 33, orangeY: 68, overall: '89%', passRate: '84%', students: '880', faculty: '380' }
      ],
      bluePts: [
        { x: 50, y: 81, r: 3.5 },
        { x: 98, y: 72, r: 2.2 },
        { x: 145, y: 60, r: 3.5 },
        { x: 240, y: 54, r: 3.5 },
        { x: 335, y: 47, r: 3.5 },
        { x: 425, y: 33, r: 3.5 }
      ],
      bluePath: 'M 50,81 C 58.0,79.5 82.2,75.5 98,72 C 113.8,68.5 121.3,63.0 145,60 C 168.7,57.0 208.3,56.2 240,54 C 271.7,51.8 304.2,50.5 335,47 C 365.8,43.5 410.0,35.3 425,33',
      blueArea: 'M 50,81 C 58.0,79.5 82.2,75.5 98,72 C 113.8,68.5 121.3,63.0 145,60 C 168.7,57.0 208.3,56.2 240,54 C 271.7,51.8 304.2,50.5 335,47 C 365.8,43.5 410.0,35.3 425,33 L 425,158 L 50,158 Z',
      blueBadge: '89%',
      blueBadgeY: 24,
      orangePts: [
        { x: 50, y: 105, r: 3.5 },
        { x: 98, y: 98, r: 2.2 },
        { x: 145, y: 91, r: 3.5 },
        { x: 240, y: 80, r: 3.5 },
        { x: 335, y: 74, r: 3.5 },
        { x: 425, y: 68, r: 3.5 }
      ],
      orangePath: 'M 50,105 C 58.0,103.8 82.2,100.3 98,98 C 113.8,95.7 121.3,94.0 145,91 C 168.7,88.0 208.3,82.8 240,80 C 271.7,77.2 304.2,76.0 335,74 C 365.8,72.0 410.0,69.0 425,68',
      orangeArea: 'M 50,105 C 58.0,103.8 82.2,100.3 98,98 C 113.8,95.7 121.3,94.0 145,91 C 168.7,88.0 208.3,82.8 240,80 C 271.7,77.2 304.2,76.0 335,74 C 365.8,72.0 410.0,69.0 425,68 L 425,158 L 50,158 Z',
      orangeBadge: '84%',
      orangeBadgeY: 59
    },
    'This Year': {
      months: [
        { name: 'Aug', fullDate: 'Aug 4', x: 50, blueY: 71, orangeY: 96, overall: '62%', passRate: '44%', students: '670', faculty: '300' },
        { name: 'Sep', fullDate: 'Sep 10', x: 145, blueY: 50, orangeY: 81, overall: '77%', passRate: '55%', students: '750', faculty: '330' },
        { name: 'Oct', fullDate: 'Oct 17', x: 240, blueY: 45, orangeY: 70, overall: '81%', passRate: '63%', students: '830', faculty: '360' },
        { name: 'Nov', fullDate: 'Nov 21', x: 335, blueY: 38, orangeY: 66, overall: '86%', passRate: '66%', students: '900', faculty: '400' },
        { name: 'Dec', fullDate: 'Dec 28', x: 425, blueY: 26, orangeY: 60, overall: '94%', passRate: '90%', students: '970', faculty: '440' }
      ],
      bluePts: [
        { x: 50, y: 71, r: 3.5 },
        { x: 98, y: 62, r: 2.2 },
        { x: 145, y: 50, r: 3.5 },
        { x: 240, y: 45, r: 3.5 },
        { x: 335, y: 38, r: 3.5 },
        { x: 425, y: 26, r: 3.5 }
      ],
      bluePath: 'M 50,71 C 58.0,69.5 82.2,65.5 98,62 C 113.8,58.5 121.3,52.8 145,50 C 168.7,47.2 208.3,47.0 240,45 C 271.7,43.0 304.2,41.2 335,38 C 365.8,34.8 410.0,28.0 425,26',
      blueArea: 'M 50,71 C 58.0,69.5 82.2,65.5 98,62 C 113.8,58.5 121.3,52.8 145,50 C 168.7,47.2 208.3,47.0 240,45 C 271.7,43.0 304.2,41.2 335,38 C 365.8,34.8 410.0,28.0 425,26 L 425,158 L 50,158 Z',
      blueBadge: '94%',
      blueBadgeY: 17,
      orangePts: [
        { x: 50, y: 96, r: 3.5 },
        { x: 98, y: 89, r: 2.2 },
        { x: 145, y: 81, r: 3.5 },
        { x: 240, y: 70, r: 3.5 },
        { x: 335, y: 66, r: 3.5 },
        { x: 425, y: 60, r: 3.5 }
      ],
      orangePath: 'M 50,96 C 58.0,94.8 82.2,91.5 98,89 C 113.8,86.5 121.3,84.2 145,81 C 168.7,77.8 208.3,72.5 240,70 C 271.7,67.5 304.2,67.7 335,66 C 365.8,64.3 410.0,61.0 425,60',
      orangeArea: 'M 50,96 C 58.0,94.8 82.2,91.5 98,89 C 113.8,86.5 121.3,84.2 145,81 C 168.7,77.8 208.3,72.5 240,70 C 271.7,67.5 304.2,67.7 335,66 C 365.8,64.3 410.0,61.0 425,60 L 425,158 L 50,158 Z',
      orangeBadge: '90%',
      orangeBadgeY: 51
    }
  };

  const currentDataset = chartDatasets[activeTab] || chartDatasets['This Semester'];
  const activeMonth = currentDataset.months?.[hoveredMonthIdx] || currentDataset.months?.[2];

  const handleMouseMoveChart = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const relX = (mouseX / rect.width) * 490;

    let closestIdx = 0;
    let minDiff = Infinity;
    currentDataset.months.forEach((m, idx) => {
      const diff = Math.abs(m.x - relX);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = idx;
      }
    });
    setHoveredMonthIdx(closestIdx);
  };

  const handleTouchMoveChart = (e) => {
    if (e.touches && e.touches[0]) {
      const rect = e.currentTarget.getBoundingClientRect();
      const touchX = e.touches[0].clientX - rect.left;
      const relX = (touchX / rect.width) * 490;

      let closestIdx = 0;
      let minDiff = Infinity;
      currentDataset.months.forEach((m, idx) => {
        const diff = Math.abs(m.x - relX);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = idx;
        }
      });
      setHoveredMonthIdx(closestIdx);
    }
  };

  const recentActivities = [
    {
      id: 1,
      title: 'New student registered',
      detail: 'Hari Priya - B.Sc Computer Science',
      time: '2 min ago',
      icon: SolidUserPlusIcon,
      color: '#2563eb',
      bg: '#eff6ff',
      dotColor: '#2563eb',
    },
    {
      id: 2,
      title: 'Attendance marked',
      detail: 'BCA – Semester 3',
      time: '8 min ago',
      icon: SolidCalendarCheckIcon,
      color: '#f59e0b',
      bg: '#fffbeb',
      dotColor: '#f59e0b',
    },
    {
      id: 3,
      title: 'Exam results published',
      detail: 'UG Regulations – Dec 2026',
      time: '15 min ago',
      icon: SolidExamDocIcon,
      color: '#2563eb',
      bg: '#eff6ff',
      dotColor: '#2563eb',
    },
    {
      id: 4,
      title: 'New notice posted',
      detail: 'Academic Calendar 2026-27',
      time: '1 hour ago',
      icon: SolidNoticeBellIcon,
      color: '#f59e0b',
      bg: '#fffbeb',
      dotColor: '#f59e0b',
    },
  ];

  const quickActions = [
    { title: 'View Students', icon: ViewStudentsIcon },
    { title: 'Manage Faculty', icon: ManageFacultyIcon },
    { title: 'Create Notice', icon: CreateNoticeIcon },
    { title: 'Track Attendance', icon: TrackAttendanceIcon },
    { title: 'View Reports', icon: ViewReportsIcon },
    { title: 'Manage Exams', icon: ManageExamsIcon },
  ];

  const upcomingEvents = [
    {
      day: '15',
      month: 'Nov',
      title: 'Internal Exams',
      time: '9:00 AM – 12:00 PM',
    },
    {
      day: '20',
      month: 'Nov',
      title: 'Faculty Meeting',
      time: 'Conference Hall',
    },
    {
      day: '25',
      month: 'Nov',
      title: 'Cultural Day',
      time: 'Main Auditorium',
    },
  ];

  return (
    <div className="dashboard-container">
      {/* Mobile Drawer Backdrop */}
      {isMobileSidebarOpen && (
        <div
          className="sidebar-mobile-backdrop"
          onClick={() => setIsMobileSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ====================================================================
          LEFT SIDEBAR (Fixed on desktop, drawer on tablet/mobile)
          ==================================================================== */}
      <aside className={`dashboard-sidebar ${isMobileSidebarOpen ? 'sidebar-mobile-open' : ''}`}>
        {/* Brand Logo & Mobile Close */}
        <div className="sidebar-brand">
          <div className="brand-logo-group">
            <div className="brand-cap-logo">
              <img
                src={navbarCapImg}
                alt="Artlysoft TalentOS Cap"
                className="brand-cap-img"
              />
            </div>
            <div className="brand-text-group">
              <div className="brand-title-line">
                Artly<span className="brand-orange">soft</span>
              </div>
              <div className="brand-sub-line">
                Talent<span className="brand-orange">OS</span>
              </div>
            </div>
          </div>
          <button
            className="sidebar-close-btn"
            onClick={() => setIsMobileSidebarOpen(false)}
            aria-label="Close Navigation Menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const NavIcon = item.icon;
            const isActive = activeNav === item.name;
            return (
              <button
                key={item.name}
                className={`nav-button ${isActive ? 'nav-active' : ''}`}
                onClick={() => {
                  setActiveNav(item.name);
                  setIsMobileSidebarOpen(false);
                }}
              >
                <NavIcon size={18} className="nav-icon" />
                <span className="nav-label">{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Bottom Promo Card */}
        <div className="sidebar-promo-card">
          <div className="promo-cap-wrapper">
            <img src={educationAiCapImg} alt="Empowering Education with AI" className="promo-cap-img" />
          </div>
          <h4 className="promo-title">
            Empowering<br />Education with AI
          </h4>
          <button className="promo-cta-btn">
            Explore TalentOS <span className="promo-arrow">→</span>
          </button>
        </div>

        {/* Footer info */}
        <div className="sidebar-footer">
          <span>© 2026 TalentOS. All rights reserved.</span>
          <span className="version-tag">v2.0.0</span>
        </div>
      </aside>

      {/* ====================================================================
          MAIN CONTENT AREA (No Scroll on Desktop, Viewport Fitted)
          ==================================================================== */}
      <main className="dashboard-main">
        {/* TOP HEADER (Exact Match to Reference Image) */}
        <header className="dashboard-header">
          {/* Diagonal Ribbon Graphic Overlay */}
          <div className="header-decor-ribbon" aria-hidden="true">
            <svg viewBox="0 0 340 52" preserveAspectRatio="none" className="header-ribbon-svg">
              {/* Soft light blue translucent wedge */}
              <polygon points="0,52 36,0 102,0 66,52" fill="#dbeafe" opacity="0.6" />
              {/* Royal blue diagonal stripe */}
              <polygon points="65,52 101,0 181,0 145,52" fill="#4d82f3" />
              {/* Golden amber diagonal stripe */}
              <polygon points="180,52 216,0 278,0 242,52" fill="#fca311" />
            </svg>
          </div>

          {/* Left Header Group: Mobile Toggle + Search Box */}
          <div className="header-left-group">
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMobileSidebarOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={20} />
            </button>

            {/* Search Box (Pill Shape) */}
            <div className="search-bar-wrapper">
              <Search className="search-icon" size={17} />
              <input
                type="text"
                placeholder="Search anything... (Ctrl + K)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          {/* Header Right Actions */}
          <div className="header-actions">
            {/* Bell Notifications (Clean Outline Icon) */}
            <button className="notification-btn" aria-label="Notifications">
              <Bell size={20} strokeWidth={1.8} className="bell-icon" />
            </button>

            {/* Profile Avatar & Title with Dropdown Card */}
            <div className="profile-pill-wrapper" ref={profileRef}>
              <div
                className={`profile-pill ${isProfileOpen ? 'active-open' : ''}`}
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                role="button"
                tabIndex={0}
                aria-haspopup="true"
                aria-expanded={isProfileOpen}
              >
                <div className="profile-avatar-dk">
                  RK
                </div>
                <div className="profile-info">
                  <span className="profile-name">Ram Kumar</span>
                  <span className="profile-role">Principal</span>
                </div>
                <ChevronDown
                  size={15}
                  strokeWidth={2.2}
                  className={`profile-chevron ${isProfileOpen ? 'chevron-rotated' : ''}`}
                />
              </div>

              {/* Profile Dropdown Menu Card (Exact Match to media_1794485331732_d0d20765.png) */}
              {isProfileOpen && (
                <div className="profile-dropdown-card">
                  <div className="dropdown-user-header">
                    <div className="dropdown-avatar-dk">
                      DK
                    </div>
                    <div className="dropdown-user-text">
                      <h4 className="dropdown-user-name"> RamKumar</h4>
                      <span className="dropdown-user-email">ram@pmccollege.ac.in</span>
                    </div>
                  </div>

                  <div className="dropdown-divider" />

                  <div className="dropdown-menu-list">
                    <button
                      className="dropdown-menu-item"
                      onClick={() => {
                        setActiveNav('Dashboard');
                        setIsProfileOpen(false);
                      }}
                    >
                      <User size={16} className="dropdown-item-icon" />
                      <span>My Profile</span>
                    </button>

                    <button
                      className="dropdown-menu-item"
                      onClick={() => {
                        setActiveNav('Settings');
                        setIsProfileOpen(false);
                      }}
                    >
                      <Settings size={16} className="dropdown-item-icon" />
                      <span>Settings</span>
                    </button>

                    <button
                      className="dropdown-menu-item dropdown-logout-item"
                      onClick={() => {
                        setIsProfileOpen(false);
                      }}
                    >
                      <LogOut size={16} className="dropdown-item-icon" />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* DASHBOARD INNER CONTENT */}
        <div className="dashboard-content">
          {/* 1. HERO BANNER (Exact Match to Reference Image) */}
          <section className="hero-banner">
            <div className="hero-text-content">
              <div className="principal-badge">
                <span className="badge-crown">👑</span>
                <span>Principal Dashboard</span>
              </div>
              <h1 className="hero-greeting">
                Welcome Principal!
              </h1>
              <div className="hero-subtitle-row">
                <p className="hero-subtitle">Lead. Inspire. Build a Better Tomorrow.</p>
                <span className="hero-gold-line" />
              </div>
            </div>

            {/* Panoramic Building Visual */}
            <div className="hero-building-visual">
              <img
                src={bannerPanoramaImg}
                alt="PMC College Panoramic Campus"
                className="banner-building-img"
                onError={(e) => {
                  e.target.src = buildingImg;
                }}
              />
              <div className="building-overlay-fade" />
            </div>
          </section>

          {/* 2. STATS ROW (4 CARDS) */}
          <section className="stats-row-wrapper">
            <StatsCards />
          </section>

          {/* 3. LOWER GRID: LEFT (2 ROWS) + RIGHT (AI ASSISTANT SPANNING FULL HEIGHT) */}
          <section className="lower-grid-container">
            {/* LEFT 2-ROW CONTAINER */}
            <div className="lower-left-column">
              {/* UPPER ROW: ACADEMIC PERFORMANCE + RECENT ACTIVITIES */}
              <div className="sub-row sub-row-top">
                {/* Academic Performance Card */}
                <div className="dash-card performance-card">
                  <div className="card-top-bar">
                    <div className="card-title-group">
                      <AcademicChartHeaderIcon size={18} color="#2563eb" className="title-icon-blue" />
                      <h3 className="card-title">Academic Performance</h3>
                    </div>
                    {/* Time toggle pills */}
                    <div className="period-pills">
                      {['This Semester', 'Last Semester', 'This Year'].map((tab) => (
                        <button
                          key={tab}
                          className={`period-pill-btn ${activeTab === tab ? 'active-pill' : ''}`}
                          onClick={() => setActiveTab(tab)}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Chart Legend */}
                  <div className="chart-legend-row">
                    <div className="legend-item">
                      <span className="legend-dot dot-blue" />
                      <span className="legend-text">Overall</span>
                    </div>
                    <div className="legend-item">
                      <span className="legend-dot dot-orange" />
                      <span className="legend-text">Pass Rate</span>
                    </div>
                  </div>

                  {/* SVG Performance Spline Chart */}
                  <div
                    className="chart-container"
                    onMouseMove={handleMouseMoveChart}
                    onMouseLeave={() => setHoveredMonthIdx(2)}
                    onTouchMove={handleTouchMoveChart}
                    onTouchStart={handleTouchMoveChart}
                  >
                    <svg viewBox="0 0 490 185" className="performance-chart-svg" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="perfBlueGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.22" />
                          <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
                        </linearGradient>
                        <linearGradient id="perfOrangeGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.20" />
                          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Y-Axis Percentage Labels */}
                      <text x="36" y="22" textAnchor="end" className="chart-axis-txt">100%</text>
                      <text x="36" y="57" textAnchor="end" className="chart-axis-txt">75%</text>
                      <text x="36" y="92" textAnchor="end" className="chart-axis-txt">50%</text>
                      <text x="36" y="127" textAnchor="end" className="chart-axis-txt">25%</text>
                      <text x="36" y="162" textAnchor="end" className="chart-axis-txt">0%</text>

                      {/* Vertical Grid lines aligned with each month */}
                      <line x1="50" y1="18" x2="50" y2="158" className="chart-grid-line" />
                      <line x1="145" y1="18" x2="145" y2="158" className="chart-grid-line" />
                      <line x1="240" y1="18" x2="240" y2="158" className="chart-grid-line" />
                      <line x1="335" y1="18" x2="335" y2="158" className="chart-grid-line" />
                      <line x1="425" y1="18" x2="425" y2="158" className="chart-grid-line" />

                      {/* Horizontal Baseline (0%) */}
                      <line x1="50" y1="158" x2="476" y2="158" className="chart-grid-line" />

                      {/* X-Axis Month Labels */}
                      {currentDataset.months.map((m, idx) => {
                        const isActive = idx === hoveredMonthIdx;
                        return (
                          <text
                            key={m.name}
                            x={m.x}
                            y="176"
                            textAnchor="middle"
                            className={`chart-axis-txt ${isActive ? 'chart-axis-active' : ''}`}
                          >
                            {m.name}
                          </text>
                        );
                      })}

                      {/* Blue Area Fill (Overall) */}
                      <path d={currentDataset.blueArea} fill="url(#perfBlueGradient)" />

                      {/* Orange Area Fill (Pass Rate) */}
                      <path d={currentDataset.orangeArea} fill="url(#perfOrangeGradient)" />

                      {/* Active Guide Line at hovered month */}
                      {activeMonth && (
                        <line
                          x1={activeMonth.x}
                          y1="18"
                          x2={activeMonth.x}
                          y2="158"
                          stroke="#93c5fd"
                          strokeWidth="1.2"
                          strokeDasharray="3 3"
                          opacity="0.8"
                        />
                      )}

                      {/* Orange Spline Line (Pass Rate) */}
                      <path
                        d={currentDataset.orangePath}
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />

                      {/* Blue Spline Line (Overall) */}
                      <path
                        d={currentDataset.bluePath}
                        fill="none"
                        stroke="#2563eb"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />

                      {/* Point nodes on Blue Line */}
                      {currentDataset.bluePts.map((pt, i) => (
                        <circle
                          key={`bp-${i}`}
                          cx={pt.x}
                          cy={pt.y}
                          r={pt.r}
                          fill="#2563eb"
                        />
                      ))}

                      {/* Point nodes on Orange Line */}
                      {currentDataset.orangePts.map((pt, i) => (
                        <circle
                          key={`op-${i}`}
                          cx={pt.x}
                          cy={pt.y}
                          r={pt.r}
                          fill="#f59e0b"
                        />
                      ))}

                      {/* Active Highlight Points with White Ring (Exact match to reference image) */}
                      {activeMonth && (
                        <>
                          <circle
                            cx={activeMonth.x}
                            cy={activeMonth.blueY}
                            r="5.5"
                            fill="#2563eb"
                            stroke="#ffffff"
                            strokeWidth="2.5"
                          />
                          <circle
                            cx={activeMonth.x}
                            cy={activeMonth.orangeY}
                            r="5.5"
                            fill="#f59e0b"
                            stroke="#ffffff"
                            strokeWidth="2.5"
                          />
                        </>
                      )}

                      {/* Blue Endpoint Badge at Dec (92%) */}
                      <rect x="434" y={currentDataset.blueBadgeY} width="36" height="19" rx="9.5" fill="#2563eb" />
                      <text x="452" y={currentDataset.blueBadgeY + 13.5} textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="700">
                        {currentDataset.blueBadge}
                      </text>

                      {/* Orange Endpoint Badge at Dec (88%) */}
                      <rect x="434" y={currentDataset.orangeBadgeY} width="36" height="19" rx="9.5" fill="#f59e0b" />
                      <text x="452" y={currentDataset.orangeBadgeY + 13.5} textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="700">
                        {currentDataset.orangeBadge}
                      </text>
                    </svg>

                    {/* Interactive Floating Tooltip Popup matching media_1794479614904_332c9747.png */}
                    {activeMonth && (
                      <div
                        className="chart-tooltip-popup"
                        style={{
                          left: `${(activeMonth.x / 490) * 100}%`,
                          transform: activeMonth.x > 300 ? 'translate(calc(-100% - 10px), -20px)' : 'translate(10px, -20px)'
                        }}
                      >
                        <div className="tooltip-header-date">{activeMonth.fullDate}</div>
                        <div className="tooltip-row-item">faculty : {activeMonth.faculty}</div>
                        <div className="tooltip-row-item tooltip-orange">pass rate : {activeMonth.passRate}</div>
                        <div className="tooltip-row-item">students : {activeMonth.students}</div>
                        <div className="tooltip-row-item tooltip-blue">overall : {activeMonth.overall}</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Recent Activities Card */}
                <div className="dash-card activities-card">
                  <div className="card-top-bar">
                    <div className="card-title-group">
                      <SolidLightningIcon size={18} color="#f59e0b" className="title-icon-lightning" />
                      <h3 className="card-title">Recent Activities</h3>
                    </div>
                    <a href="#activities" className="card-link-action">
                      View All <ArrowRight size={13} />
                    </a>
                  </div>

                  {/* Vertical timeline items */}
                  <div className="activity-timeline">
                    {/* The continuous vertical connector line */}
                    <div className="timeline-spine-line" />

                    {recentActivities.map((act) => {
                      const ActivityIcon = act.icon;
                      return (
                        <div key={act.id} className="timeline-item">
                          <div className="timeline-track-col">
                            <span className="timeline-node-dot" style={{ backgroundColor: act.dotColor }} />
                          </div>
                          <div className="timeline-circle" style={{ backgroundColor: act.bg }}>
                            <ActivityIcon size={17} color={act.color} />
                          </div>
                          <div className="timeline-content">
                            <div className="timeline-text-group">
                              <h4 className="timeline-heading">{act.title}</h4>
                              <p className="timeline-sub">{act.detail}</p>
                            </div>
                            <span className="timeline-time">{act.time}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* LOWER ROW: INSTITUTE OVERVIEW + QUICK ACTIONS + UPCOMING EVENTS */}
              <div className="sub-row sub-row-bottom">
                {/* Institute Overview */}
                <div className="dash-card institute-card">
                  <div className="card-top-bar">
                    <div className="card-title-group">
                      <SolidLandmarkIcon size={18} color="#2563eb" className="title-icon-blue" />
                      <h3 className="card-title">Institute Overview</h3>
                    </div>
                    <a href="#institute" className="card-link-action">
                      View Details <span className="link-arrow">→</span>
                    </a>
                  </div>

                  <div className="institute-body">
                    {/* Campus Building Thumbnail */}
                    <div className="institute-thumb-wrapper">
                      <img
                        src={instituteThumbImg}
                        alt="PMC College Campus"
                        className="institute-thumb-img"
                        onError={(e) => {
                          e.target.src = buildingImg;
                        }}
                      />
                    </div>

                    {/* Institute Metadata */}
                    <div className="institute-meta-details">
                      <div className="institute-name-row">
                        <h4 className="institute-name">PMC College</h4>
                        <span className="verified-badge">Verified</span>
                      </div>

                      <div className="institute-location">
                        <MapPin size={12} className="location-pin" />
                        <span>Hosur, Tamil Nadu</span>
                      </div>

                      <div className="institute-stats-table">
                        <div className="stats-row-item">
                          <span className="meta-label">Affiliated University</span>
                          <span className="meta-val">Anna University</span>
                        </div>
                        <div className="stats-row-item">
                          <span className="meta-label">Total Departments</span>
                          <span className="meta-val">12</span>
                        </div>
                        <div className="stats-row-item">
                          <span className="meta-label">Total Batches</span>
                          <span className="meta-val">48</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subscription Plan Bar */}
                  <div className="subscription-bar">
                    <div className="plan-item">
                      <div className="plan-star-circle">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                      </div>
                      <div className="plan-desc">
                        <span className="sub-label">Subscription Plan</span>
                        <span className="sub-title">TalentOS Per Student Monthly</span>
                      </div>
                    </div>
                    <div className="plan-validity">
                      <span className="sub-valid-label">Valid Till</span>
                      <span className="sub-date">15 Nov 2026</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions Card */}
                <div className="dash-card quick-actions-card">
                  <div className="card-top-bar">
                    <div className="card-title-group">
                      <QuickRocketIcon size={20} className="title-icon-rocket-svg" />
                      <h3 className="card-title">Quick Actions</h3>
                    </div>
                  </div>

                  <div className="quick-actions-grid">
                    {quickActions.map((action, index) => {
                      const ActionTileIcon = action.icon;
                      return (
                        <button key={index} className="action-tile-btn">
                          <ActionTileIcon size={25} className="action-tile-icon" />
                          <span className="action-tile-text">{action.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Upcoming Events Card */}
                <div className="dash-card events-card">
                  <div className="card-top-bar">
                    <div className="card-title-group">
                      <CalendarCheck className="title-icon title-icon-blue" size={17} />
                      <h3 className="card-title">Upcoming Events</h3>
                    </div>
                    <a href="#events" className="card-link-action">
                      View Calendar <ArrowRight size={13} />
                    </a>
                  </div>

                  <div className="events-list">
                    {upcomingEvents.map((evt, idx) => (
                      <div key={idx} className="event-item-row">
                        <div className="event-date-col">
                          <span className="event-day-num">{evt.day}</span>
                          <span className="event-month-txt">{evt.month}</span>
                        </div>
                        <div className="event-details">
                          <h4 className="event-item-title">{evt.title}</h4>
                          <p className="event-item-time">{evt.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: TALENTOS AI COMING SOON CARD */}
            <div className="lower-right-column">
              <div className="dash-card ai-coming-soon-card">
                {/* Decorative background blobs & waves */}
                <div className="ai-bg-blob-tr" />
                <div className="ai-bg-blob-bl" />
                <svg className="ai-bg-wave-bottom" viewBox="0 0 300 70" preserveAspectRatio="none">
                  <path d="M 0,35 C 60,15 120,65 180,45 C 240,25 270,55 300,40 L 300,70 L 0,70 Z" fill="#93c5fd" opacity="0.35" />
                  <path d="M 0,45 C 80,30 160,60 220,40 C 270,25 290,50 300,45 L 300,70 L 0,70 Z" fill="#c7d2fe" opacity="0.25" />
                </svg>

                {/* 1. Top Header */}
                <div className="ai-cs-header">
                  <div className="ai-cs-brand-group">
                    <div className="ai-cs-cap-badge">
                      <GraduationCap size={19} className="ai-cs-cap-icon" />
                    </div>
                    <div className="ai-cs-brand-text">
                      <span className="ai-cs-brand-name">TalentOS</span>
                      <span className="ai-cs-brand-sub">Your Smart Campus Guide</span>
                    </div>
                  </div>
                 
                </div>

                {/* 2. Hero Typography Area */}
                <div className="ai-cs-hero">
                  <div className="ai-cs-hero-title-row">
                    {/* 3 Burst Rays */}
                    <svg width="22" height="22" viewBox="0 0 24 24" className="ai-cs-burst-rays">
                      <line x1="14" y1="3" x2="16" y2="9" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="6" y1="7" x2="10.5" y2="12" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="2" y1="16" x2="8" y2="16" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    <h2 className="ai-cs-title-primary">TalentOS AI</h2>
                    <span className="ai-cs-star-top-right">✦</span>
                    <span className="ai-cs-star-mid-right">✦</span>
                  </div>
                  <div className="ai-cs-title-highlight">Coming Soon!</div>
                  <p className="ai-cs-desc">
                    Your intelligent campus assistant<br />is on the way...
                  </p>
                </div>

                {/* 3. Three Feature Cards */}
                <div className="ai-cs-features">
                  {/* Smart Insights */}
                  <div className="ai-cs-feature-card">
                    <div className="ai-cs-feature-left">
                      <div className="ai-cs-icon-circle circle-blue">
                        <Zap size={16} fill="#ffffff" color="#ffffff" />
                      </div>
                      <div className="ai-cs-feature-texts">
                        <span className="ai-cs-feature-title">Smart Insights</span>
                        <span className="ai-cs-feature-sub">Get instant insights</span>
                      </div>
                    </div>
                    <ChevronRight size={16} className="ai-cs-chevron" />
                  </div>

                  {/* AI Campus Assistant */}
                  <div className="ai-cs-feature-card">
                    <div className="ai-cs-feature-left">
                      <div className="ai-cs-icon-circle circle-purple">
                        <MessageSquare size={16} fill="#ffffff" color="#ffffff" />
                      </div>
                      <div className="ai-cs-feature-texts">
                        <span className="ai-cs-feature-title">AI Campus Assistant</span>
                        <span className="ai-cs-feature-sub">Ask campus queries</span>
                      </div>
                    </div>
                    <ChevronRight size={16} className="ai-cs-chevron" />
                  </div>

                  {/* Intelligent Reports */}
                  <div className="ai-cs-feature-card">
                    <div className="ai-cs-feature-left">
                      <div className="ai-cs-icon-circle circle-orange">
                        <BarChart3 size={16} color="#ffffff" />
                      </div>
                      <div className="ai-cs-feature-texts">
                        <span className="ai-cs-feature-title">Intelligent Reports</span>
                        <span className="ai-cs-feature-sub">Access reports easily</span>
                      </div>
                    </div>
                    <ChevronRight size={16} className="ai-cs-chevron" />
                  </div>
                </div>

                {/* 4. Bottom Footer */}
                <div className="ai-cs-footer">
                  <div className="ai-cs-footer-text-row">
                    <span className="ai-cs-tagline">A Smarter Campus Starts Here</span>
                    <svg width="86" height="9" viewBox="0 0 86 9" className="ai-cs-swoosh">
                      <path d="M 4,2 Q 43,9 82,2" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                    </svg>
                    <span className="ai-cs-footer-sparkle">✦</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
