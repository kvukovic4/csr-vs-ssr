import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CategoryIcon from "@mui/icons-material/Category";
import { Collapse } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SideNav({ children }) {
	const [open, setOpen] = useState();
	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<Box sx={{ display: "flex" }}>
			<AppBar
				position="fixed"
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
			>
				<Toolbar>
					<Typography variant="h6" noWrap component="div">
						E-commerce
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				sx={{
					width: 250,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: {
						width: 250,
						boxSizing: "border-box",
					},
				}}
			>
				<Toolbar />
				<Box sx={{ overflow: "auto" }}>
					<List aria-labelledby="nested-list-subheader">
						<Link
							to="/products/all-products"
							style={{ color: "inherit", textDecoration: "inherit" }}
						>
							<ListItem button key="1">
								<ListItemIcon>
									<ShoppingBagIcon />
								</ListItemIcon>
								<ListItemText
									primary="All Products"
									primaryTypographyProps={{
										fontSize: 14,
										fontWeight: "medium",
									}}
								/>
							</ListItem>
						</Link>

						<ListItem button key="2" onClick={handleClick}>
							<ListItemIcon>
								<CategoryIcon />
							</ListItemIcon>
							<ListItemText
								primary="Categories"
								primaryTypographyProps={{ fontSize: 14, fontWeight: "medium" }}
							/>
							{open ? <ExpandLess /> : <ExpandMore />}
						</ListItem>
						<Collapse in={open} timeout="auto" unmountOnExit>
							<List>
								<Link
									to="/products/men-shoes"
									style={{ color: "inherit", textDecoration: "inherit" }}
								>
									<ListItem button key="3">
										<ListItemText
											sx={{ marginLeft: "55px" }}
											primary="Men shoes"
											primaryTypographyProps={{
												fontSize: 14,
												fontWeight: "normal",
											}}
										/>
									</ListItem>
								</Link>

								<Link
									to="/products/women-shoes"
									style={{ color: "inherit", textDecoration: "inherit" }}
								>
									<ListItem button key="4">
										<ListItemText
											sx={{ marginLeft: "55px" }}
											primary="Women shoes"
											primaryTypographyProps={{
												fontSize: 14,
												fontWeight: "normal",
											}}
										/>
									</ListItem>
								</Link>

								<Link
									to="/products/kids-shoes"
									style={{ color: "inherit", textDecoration: "inherit" }}
								>
									<ListItem button key="5">
										<ListItemText
											sx={{ marginLeft: "55px" }}
											primary="Kids shoes"
											primaryTypographyProps={{
												fontSize: 14,
												fontWeight: "normal",
											}}
										/>
									</ListItem>
								</Link>
							</List>
						</Collapse>
					</List>
				</Box>
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
}
