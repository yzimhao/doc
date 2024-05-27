#!/bin/bash


rm ~/Library/Application\ Support/Dock/*.db
defaults write com.apple.dock ResetLaunchPad -bool true && killall Dock



