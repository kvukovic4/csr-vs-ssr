import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CategoryIcon from '@mui/icons-material/Category';
import GroupIcon from '@mui/icons-material/Group';
import { Collapse, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import Link from 'next/link';

export default function SideNav({ children }) {
	const [open, setOpen] = useState();
	const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
			>
				<Toolbar>
					<Typography variant="h6" noWrap component="div">
						Nike shop (RapidAPI Nike Products)
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				variant={mobile ? 'temporary' : 'permanent'}
				sx={{
					width: mobile ? 100 : 250,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: {
						width: mobile ? 100 : 250,
						boxSizing: 'border-box',
					},
				}}
			>
				<Toolbar />
				<Box sx={{ overflow: 'auto' }}>
					<List aria-labelledby="nested-list-subheader">
						<Link href="/products/all-products" passHref>
							<ListItem button key="1">
								<ListItemIcon>
									<ShoppingBagIcon />
								</ListItemIcon>
								<ListItemText
									primary="All Products"
									primaryTypographyProps={{
										fontSize: 14,
										fontWeight: 'medium',
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
								primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
							/>
							{open ? <ExpandLess /> : <ExpandMore />}
						</ListItem>
						<Collapse in={open} timeout="auto" unmountOnExit>
							<List>
								<Link href="/products/men-shoes" passHref>
									<ListItem button key="3">
										<ListItemText
											sx={{ marginLeft: '55px' }}
											primary="Men shoes"
											primaryTypographyProps={{
												fontSize: 14,
												fontWeight: 'normal',
											}}
										/>
									</ListItem>
								</Link>

								<Link href="/products/women-shoes" passHref>
									<ListItem button key="4">
										<ListItemText
											sx={{ marginLeft: '55px' }}
											primary="Women shoes"
											primaryTypographyProps={{
												fontSize: 14,
												fontWeight: 'normal',
											}}
										/>
									</ListItem>
								</Link>

								<Link href="/products/kids-shoes" passHref>
									<ListItem button key="5">
										<ListItemText
											sx={{ marginLeft: '55px' }}
											primary="Kids shoes"
											primaryTypographyProps={{
												fontSize: 14,
												fontWeight: 'normal',
											}}
										/>
									</ListItem>
								</Link>
							</List>
						</Collapse>
					</List>
					{/* <Divider /> */}
					{/* <List>
						<Link href="/users" passHref>
							<ListItem button key="4">
								<ListItemIcon>
									<GroupIcon />
								</ListItemIcon>
								<ListItemText
									primary="Users"
									primaryTypographyProps={{
										fontSize: 14,
										fontWeight: 'medium',
									}}
								/>
							</ListItem>
						</Link>
					</List> */}
				</Box>
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
}
