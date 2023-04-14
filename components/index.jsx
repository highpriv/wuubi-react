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

/// ToDo: Add all components here. That way, you can import all components from one file.
/// It may be useful but i've seperate this file by pages. 'Cause i don't want to import all components in one file.
/// For example, i don't want to import all components in Home.
/// I just want to import components that i need in index.jsx.

export default {
  Header,
  Footer,
  List,
  ListItem,
  ListItemAvatar,
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
};
