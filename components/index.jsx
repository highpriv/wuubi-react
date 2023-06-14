import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import FeaturedPosts from "./FeaturedPosts/FeaturedPosts";
import WuubiButton from "./Button/Button";
import Menu from "@mui/material/Menu";
import Image from "next/image";
import MenuItem from "@mui/material/MenuItem";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardBox from "./CardBox/CardBox";
import TopGroups from "./TopGroups/TopGroups";
import TopUsers from "./TopUsers/TopUsers";
import LastPosts from "./LastPosts/LastPosts";
import SuggestedPosts from "./SuggestedPosts/SuggestedPosts";
import Populars from "./Sidebar/Populars/Populars";
import Comment from "./Comment/Comment";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import HotPosts from "./HotPosts/HotPosts";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import Link from "next/link";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Alert from "@mui/material/Alert";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogModal from "./DialogModal";
import ListItemIcon from "@mui/material/ListItemIcon";
import Switch from "@mui/material/Switch";
import Select from "@mui/material/Select";
import Input from "@mui/material/Input";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import sanitizeHtml from "sanitize-html";
import FilledInput from "@mui/material/FilledInput";
import Masonry from "@mui/lab/Masonry";
import AvatarGroup from "@mui/material/AvatarGroup";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import MenuList from "@mui/material/MenuList";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";

const HTMLRenderer = ({ htmlContent }) => {
  const sanitizedHtml = sanitizeHtml(htmlContent);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
};

/// ToDo: Add all components here. That way, you can import all components from one file.
/// It may be useful but i've seperate this file by pages. 'Cause i don't want to import all components in one file.
/// For example, i don't want to import all components in Home.
/// I just want to import components that i need in index.jsx.

export default {
  SpaceDashboardIcon,
  MenuList,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  AvatarGroup,
  Masonry,
  Radio,
  FilledInput,
  HTMLRenderer,
  ReactQuill,
  Input,
  Select,
  Switch,
  DialogModal,
  ListItemIcon,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Header,
  Footer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  Avatar,
  ListItemText,
  WuubiButton,
  FeaturedPosts,
  LastPosts,
  SuggestedPosts,
  Comment,
  Menu,
  TopUsers,
  TopGroups,
  CardBox,
  CardHeader,
  Card,
  CardActions,
  CardContent,
  Sidebar,
  Populars,
  CardMedia,
  MenuItem,
  Image,
  AppBar,
  Toolbar,
  Container,
  Typography,
  Box,
  Button,
  IconButton,
  Tooltip,
  Grid,
  Divider,
  Chip,
  TextField,
  HotPosts,
  FormControl,
  Link,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  Alert,
};
