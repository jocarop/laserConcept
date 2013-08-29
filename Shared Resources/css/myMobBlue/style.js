A5.themes.add('myMobBlue',{
	editButtonGroup: {
		base: {
			container: {
				className: 'myMobBlueEditBG',
				hoverClassName: 'myMobBlueEditBGHover',
				focusClassName: 'myMobBlueEditBGFocus',
				separatorClassName: 'myMobBlueEditBGSeparator',
				editClassName: 'myMobBlueEditBGEdit',
				button: {
					html: '<img src="CSS/myMobBlue/EditDDArrow.PNG" />',
					className: 'myMobBlueEditBGButton',
					hoverClassName: 'myMobBlueEditBGButtonHover',
					pressedClassName: 'myMobBlueEditBGButtonPressed'
				}
			}
		}
	},
	button: {
		base: {
			className: 'myMobBlueButton',
			hoverClassName: 'myMobBlueButtonHover',
			pressedClassName: 'myMobBlueButtonPressed',
			disabledClassName: 'myMobBlueButtonDisabled'
		},
		toolbar: {
			className: 'myMobBlueButtonT',
			hoverClassName: 'myMobBlueButtonTHover',
			pressedClassName: 'myMobBlueButtonTPressed',
			disabledClassName: 'myMobBlueButtonTDisabled'
		}
	},
	buttonDropdown: {
		base: {
			className: 'myMobBlueButtonDD',
			hoverClassName: 'myMobBlueButtonDDHover',
			pressedClassName: 'myMobBlueButtonDDPressed',
			disabledClassName: 'myMobBlueButtonDDDisabled',
			contentClassName: 'myMobBlueButtonDDContent',
			dropdown: {
				className: 'myMobBlueButtonDDDropdown',
				icon: 'CSS/myMobBlue/ButtonDDArrow.PNG'
			}
		},
		toolbar: {
			className: 'myMobBlueButtonTDD',
			hoverClassName: 'myMobBlueButtonTDDHover',
			pressedClassName: 'myMobBlueButtonTDDPressed',
			disabledClassName: 'myMobBlueButtonTDDDisabled',
			contentClassName: 'myMobBlueButtonTDDContent',
			dropdown: {
				className: 'myMobBlueButtonTDDDropdown',
				icon: 'CSS/myMobBlue/ButtonDDArrow.PNG'
			}
		}
	},
	buttonSplit: {
		base: {
			className: 'myMobBlueButtonDD',
			hoverClassName: 'myMobBlueButtonDDHover',
			pressedClassName: 'myMobBlueButtonDDPressed',
			disabledClassName: 'myMobBlueButtonDDDisabled',
			contentClassName: 'myMobBlueButtonDDSplitContent',
			dropdown: {
				className: 'myMobBlueButtonDDSplitDropdown',
				hoverClassName: 'myMobBlueButtonDDSplitDropdownHover',
				icon: 'CSS/myMobBlue/ButtonDDArrow.PNG'
			}
		},
		toolbar: {
			className: 'myMobBlueButtonTDD',
			hoverClassName: 'myMobBlueButtonTDDHover',
			pressedClassName: 'myMobBlueButtonTDDPressed',
			disabledClassName: 'myMobBlueButtonTDDDisabled',
			contentClassName: 'myMobBlueButtonTDDSplitContent',
			dropdown: {
				className: 'myMobBlueButtonTDDSplitDropdown',
				hoverClassName: 'myMobBlueButtonTDDSplitDropdownHover',
				icon: 'CSS/myMobBlue/ButtonDDArrow.PNG'
			}
		}
	},
	slider: {
		base: {
			className: 'myMobBlueSliderH',
			innerClassName: 'myMobBlueSliderHInner',
			handle: {
				className: 'myMobBlueSliderHHandle',
				minClassName: 'myMobBlueSliderHHandleMin',
				maxClassName: 'myMobBlueSliderHHandleMax',
				selectedClassName: 'myMobBlueSliderHHandleSelected',
				hoverClassName: 'myMobBlueSliderHHandleHover'
			},
			range: {
				className: 'myMobBlueSliderHRange',
				selectedClassName: 'myMobBlueSliderHRangeSelected',
				hoverClassName: 'myMobBlueSliderHRangeHover'
			}
		}
	},
	listbox: {
		base: {
			className: 'myMobBlueList',
			focusClassName: 'myMobBlueListFocus',
			item: {
				className: 'myMobBlueListItem',
				hoverClassName: 'myMobBlueListItemHover',
				selectedClassName: 'myMobBlueListItemSelected',
				titleClassName: 'myMobBlueListTitle',
				separatorClassName: 'myMobBlueListSeparator'
			}
		}
	},
	tree: {
		base: {
			className: 'myMobBlueTree',
			focusClassName: 'myMobBlueTreeFocus',
			node: {
				className: 'myMobBlueTreeNode',
				hoverClassName: 'myMobBlueTreeNodeHover',
				selectedClassName: 'myMobBlueTreeNodeSelected',
				labelClassName: 'myMobBlueTreeNodeLabel',
				leaf: {
					firstImage: '',
					image: '',
					lastImage: ''
				},
				branch: {
					firstExpandedImage: '',
					firstCollapsedImage: '',
					firstExpandedHoverImage: '',
					firstCollapsedHoverImage: '',
					expandedImage: 'CSS/myMobBlue/TreeBranchCollapse.PNG',
					collapsedImage: 'CSS/myMobBlue/TreeBranchExpand.PNG',
					expandedHoverImage: 'CSS/myMobBlue/TreeBranchCollapseHover.PNG',
					collapsedHoverImage: 'CSS/myMobBlue/TreeBranchExpandHover.PNG',
					lastExpandedImage: '',
					lastCollapsedImage: '',
					lastExpandedHoverImage: '',
					lastCollapsedHoverImage: ''
				}
			},
			branch: {
				className: 'myMobBlueTreeBranch',
				lineImage: '',
				nullImage: 'CSS/myMobBlue/TreeNull.PNG'
			}
		}
	},
	datePicker: {
		base: {
			className: 'myMobBlueDP',
			calendar: {
				daysOfWeek: {
					show: true,
					className: 'myMobBlueDPDaysOfWeek'
				},
				weeksOfYear: {
					show: false,
					className: 'myMobBlueDPWeeksOfYear',
					headerClassName: 'myMobBlueDPWeeksOfYearHeader'
				},
				date: {
					className: 'myMobBlueDPDate',
					weekendClassName: 'myMobBlueDPDateWeekend',
					todayClassName: 'myMobBlueDPDateToday',
					item: {
						className: 'myMobBlueDPItem',
						hoverClassName: 'myMobBlueDPItemHover',
						selectedClassName: 'myMobBlueDPItemSelected',
						disabledClassName: 'myMobBlueDPItemDisabled',
						outOfRangeClassName: 'myMobBlueDPItemOutOfRange'
					}
				}
			},
			navigator: {
				header: {
					className: 'myMobBlueDPHeader',
					prevIcon: 'CSS/myMobBlue/DPPrev.PNG',
					nextIcon: 'CSS/myMobBlue/DPNext.PNG',
					prevIconHover: '',
					nextIconHover: '',
					item: {
						className: 'myMobBlueDPHeaderButton',
						hoverClassName: 'myMobBlueDPHeaderButtonHover',
						selectedClassName: 'myMobBlueDPHeaderButtonSelected'
					}
				},
				panel: {
					className: 'myMobBlueDPPanel',
					edit: {
						className: 'myMobBlueEdit'
					},
					item: {
						className: 'myMobBlueDPItem',
						hoverClassName: 'myMobBlueDPItemHover',
						selectedClassName: 'myMobBlueDPItemSelected',
						disabledClassName: 'myMobBlueDPItemDisabled'
					}
				}
			}
		}
	},
	timePicker: {
		base: {
			className: 'myMobBlueTP',
			edit: {
				className: 'myMobBlueEdit',
				buttonClassName: 'myMobBlueTPEditButton',
				buttonImage: 'CSS/myMobBlue/TPEditDDArrow.PNG'
			},
			meridianClassName: 'myMobBlueTPMeridianButton'
		}
	},
	menu: {
		base: {
			className: 'myMobBlueMenu',
			innerClassName: 'myMobBlueMenuInner',
			closeOnLeave: true,
			closeWait: 500,
			cascadeOffsetX: 0,
			cascadeOffsetY: 0,
			iconColumn: {
				className: 'myMobBlueMenuIconColumn',
				preventIndentClassName: 'myMobBlueMenuNoIndent',
				width: '24px'
			},
			item: {
				className: 'myMobBlueMenuItem',
				labelClassName: 'myMobBlueMenuItemLabel',
				hoverClassName: 'myMobBlueMenuItemHover',
				selectedClassName: 'myMobBlueMenuItemSelected',
				disabledClassName: 'myMobBlueMenuItemDisabled',
				disabledHoverClassName: 'myMobBlueMenuItemDisabledHover',
				cascadeClassName: 'myMobBlueMenuItemCascade',
				separatorClassName: 'myMobBlueMenuSeparator',
				titleClassName: 'myMobBlueMenuTitle',
				radioImage: 'CSS/myMobBlue/MenuRadio.PNG',
				checkImage: 'CSS/myMobBlue/MenuCheck.PNG'
			}
		}
	},
	menubar: {
		base: {
			item: {
				className: 'myMobBlueMenubarHItem',
				hoverClassName: 'myMobBlueMenubarHItemHover',
				pressedClassName: 'myMobBlueMenubarHItemPressed',
				disabledClassName: 'myMobBlueMenubarHItemDisabled',
				cascadeClassName: 'myMobBlueMenubarHItemCascade',
				separatorClassName: 'myMobBlueMenubarHSeparator'
			}
		},
		vertical: {
			item: {
				className: 'myMobBlueMenubarVItem',
				hoverClassName: 'myMobBlueMenubarVItemHover',
				pressedClassName: 'myMobBlueMenubarVItemPressed',
				disabledClassName: 'myMobBlueMenubarVItemDisabled',
				cascadeClassName: 'myMobBlueMenubarVItemCascade',
				separatorClassName: 'myMobBlueMenubarVSeparator'
			}
		}
	},
	window: {
		base: {
			className: 'myMobBlueWin',
			outerWrapClassName: 'myMobBlueWinInner',
			innerWrapClassName: 'myMobBlueWinBodyContainer',
			adjustmentClassName: 'myMobBlueWinAdjust',
			activeClassName: 'myMobBlueWinActive',
			lockUIClassName: 'myMobBlueUILock',
			title: {className: 'myMobBlueWinTitle', tools: {inset: '5px'}},
			header: {className: 'myMobBlueWinHeader'},
			tbar: {className: 'myMobBlueWinTBAR'},
			body: {className: 'myMobBlueWinBody'},
			bbar: {className: 'myMobBlueWinBBAR'},
			buttons: {className: 'myMobBlueWinButtons'},
			footer: {className: 'myMobBlueWinFooter'},
			resizer: {
				className: 'myMobBlueWinResizer',
				thumbImage: 'CSS/myMobBlue/WinResizeThumb.PNG'
			},
			_buttonDefaults: {
				className: 'myMobBlueButton',
				hoverClassName: 'myMobBlueButtonHover',
				pressedClassName: 'myMobBlueButtonPressed',
				disabledClassName: 'myMobBlueButtonDisabled'
			},
			_defaultTools: {
				'close': {
					image: 'CSS/myMobBlue/WinClose.PNG',
					imageHover: 'CSS/myMobBlue/WinCloseHover.PNG',
					imagePressed: 'CSS/myMobBlue/WinClosePressed.PNG',
					action: 'close'
				}
			}
		},
		dropdown: {
			className: 'myMobBlueDDWin',
			outerWrapClassName: 'myMobBlueDDWinInner',
			innerWrapClassName: 'myMobBlueDDWinBodyContainer',
			adjustmentClassName: 'myMobBlueDDWinAdjust',
			activeClassName: 'myMobBlueDDWinActive',
			lockUIClassName: 'myMobBlueUILock',
			title: {className: 'myMobBlueDDWinTitle', tools: {inset: '5px'}},
			header: {className: 'myMobBlueDDWinHeader'},
			tbar: {className: 'myMobBlueDDWinTBAR'},
			body: {className: 'myMobBlueDDWinBody'},
			bbar: {className: 'myMobBlueDDWinBBAR'},
			buttons: {className: 'myMobBlueDDWinButtons'},
			footer: {className: 'myMobBlueDDWinFooter'},
			resizer: {
				className: 'myMobBlueDDWinResizer',
				thumbImage: 'CSS/myMobBlue/DDWinResizeThumb.PNG'
			},
			_buttonDefaults: {
				className: 'myMobBlueButton',
				hoverClassName: 'myMobBlueButtonHover',
				pressedClassName: 'myMobBlueButtonPressed',
				disabledClassName: 'myMobBlueButtonDisabled'
			},
			_defaultTools: {
				'close': {
					image: 'CSS/myMobBlue/DDWinClose.PNG',
					imageHover: 'CSS/myMobBlue/DDWinCloseHover.PNG',
					imagePressed: 'CSS/myMobBlue/DDWinClosePressed.PNG',
					action: 'close'
				}
			}
		}
	},
	accordion: {
		base: {
			titleClassName: 'myMobBlueAccordionButton',
			titleSelectedClassName: 'myMobBlueAccordionButtonSelected',
			titleDisabledClassName: 'myMobBlueAccordionButtonDisabled',
			paneClassName: 'myMobBlueAccordionPane'
		}
	},
	tab: {
		base: {
			tabClassName: 'myMobBlueTabTButton',
			tabSelectedClassName: 'myMobBlueTabTButtonSelected',
			tabDisabledClassName: 'myMobBlueTabTButtonDisabled',
			paneClassName: 'myMobBlueTabTPane'
		},
		bottom: {
			tabClassName: 'myMobBlueTabBButton',
			tabSelectedClassName: 'myMobBlueTabBButtonSelected',
			tabDisabledClassName: 'myMobBlueTabBButtonDisabled',
			paneClassName: 'myMobBlueTabBPane'
		},
		left: {
			tabClassName: 'myMobBlueTabLButton',
			tabSelectedClassName: 'myMobBlueTabLButtonSelected',
			tabDisabledClassName: 'myMobBlueTabLButtonDisabled',
			paneClassName: 'myMobBlueTabLPane'
		},
		right: {
			tabClassName: 'myMobBlueTabRButton',
			tabSelectedClassName: 'myMobBlueTabRButtonSelected',
			tabDisabledClassName: 'myMobBlueTabRButtonDisabled',
			paneClassName: 'myMobBlueTabRPane'
		}
	},
	tabBand: {
		base: {
			location: 'top',
			className: 'myMobBlueTabbandT',
			separator:{
				className: 'myMobBlueTabbandTSeparator',
				show: true
			},
			tab: {
				className: 'myMobBlueTabbandTButton',
				selectedClassName: 'myMobBlueTabbandTButtonSelected',
				disabledClassName: 'myMobBlueTabbandTButtonDisabled',
				closeIcon: 'CSS/myMobBlue/TabbandClose.PNG',
				closeIconHover: 'CSS/myMobBlue/TabbandCloseHover.PNG'
			},
			scrollButtons: {
				prevClassName: 'myMobBlueTabbandTLScroll',
				prevDisabledClassName: 'myMobBlueTabbandTLScrollDisabled',
				prevImage: 'CSS/myMobBlue/TabbandPrev.PNG',
				prevDisabledImage: 'CSS/myMobBlue/TabbandPrevDisabled.PNG',
				nextClassName: 'myMobBlueTabbandTRScroll',
				nextDisabledClassName: 'myMobBlueTabbandTRScrollDisabled',
				nextImage: 'CSS/myMobBlue/TabbandNext.PNG',
				nextDisabledImage: 'CSS/myMobBlue/TabbandNextDisabled.PNG'
			}
		},
		bottom: {
			location: 'bottom',
			className: 'myMobBlueTabbandB',
			separator:{
				className: 'myMobBlueTabbandBSeparator',
				show: true
			},
			tab: {
				className: 'myMobBlueTabbandBButton',
				selectedClassName: 'myMobBlueTabbandBButtonSelected',
				disabledClassName: 'myMobBlueTabbandBButtonDisabled',
				closeIcon: 'CSS/myMobBlue/TabbandClose.PNG',
				closeIconHover: 'CSS/myMobBlue/TabbandCloseHover.PNG'
			},
			scrollButtons: {
				prevClassName: 'myMobBlueTabbandBLScroll',
				prevDisabledClassName: 'myMobBlueTabbandBLScrollDisabled',
				prevImage: 'CSS/myMobBlue/TabbandPrev.PNG',
				prevDisabledImage: 'CSS/myMobBlue/TabbandPrevDisabled.PNG',
				nextClassName: 'myMobBlueTabbandBRScroll',
				nextDisabledClassName: 'myMobBlueTabbandBRScrollDisabled',
				nextImage: 'CSS/myMobBlue/TabbandNext.PNG',
				nextDisabledImage: 'CSS/myMobBlue/TabbandNextDisabled.PNG'
			}
		}
	}
});